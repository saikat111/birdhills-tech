import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createAdminToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    let user = null;
    const normalizedEmail = email.toLowerCase().trim();

    try {
      user = await prisma.adminUser.findUnique({
        where: { email: normalizedEmail },
      });
    } catch (dbError: any) {
      console.error("Database lookup error during admin authentication:", dbError?.message || dbError);

      // Auto-healing: If SQLite tables are missing on live deployment
      if (dbError?.message?.includes("does not exist") || dbError?.code === "P2021") {
        try {
          console.warn("Tables missing, attempting emergency database push...");
          const { execSync } = require("child_process");
          execSync("npx prisma db push --skip-generate --accept-data-loss", {
            cwd: process.cwd(),
            env: process.env,
            timeout: 15000,
          });
          user = await prisma.adminUser.findUnique({
            where: { email: normalizedEmail },
          });
        } catch (repairErr: any) {
          console.error("Emergency DB push failed:", repairErr?.message);
        }
      }
    }

    // Auto-seed: If database is connected but has 0 admin accounts
    if (!user && normalizedEmail === "admin@birdhillstech.com") {
      try {
        const totalAdmins = await prisma.adminUser.count().catch(() => 0);
        if (totalAdmins === 0) {
          const defaultHash = await bcrypt.hash("DubaiTech2026!", 10);
          user = await prisma.adminUser.create({
            data: {
              email: "admin@birdhillstech.com",
              name: "Super Administrator",
              passwordHash: defaultHash,
              role: "admin",
            },
          });
          console.log("Successfully auto-seeded default admin account:", user.email);
        }
      } catch (seedErr: any) {
        console.warn("Auto-seed check failed:", seedErr?.message);
      }
    }

    if (!user) {
      return NextResponse.json(
        { error: "Invalid corporate credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid corporate credentials" },
        { status: 401 }
      );
    }

    const token = await createAdminToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    // Set secure HttpOnly cookie
    response.cookies.set("bht_admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error during authentication" },
      { status: 500 }
    );
  }
}

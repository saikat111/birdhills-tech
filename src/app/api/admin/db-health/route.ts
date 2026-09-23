import { NextResponse } from "next/server";
import { prisma, resolveDatabaseUrl } from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const doRepair = url.searchParams.get("repair") === "true";

    const resolvedUrl = resolveDatabaseUrl();
    const cleanPath = resolvedUrl.replace(/^file:/, "");
    const fileExists = fs.existsSync(cleanPath);
    const fileSize = fileExists ? fs.statSync(cleanPath).size : 0;

    let tables: string[] = [];
    let adminCount = 0;
    let dbError = null;

    try {
      const rawTables = (await prisma.$queryRawUnsafe(
        "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';"
      )) as Array<{ name: string }>;
      tables = rawTables.map((t) => t.name);

      if (tables.includes("AdminUser")) {
        adminCount = await prisma.adminUser.count();
      }
    } catch (err: any) {
      dbError = err?.message || String(err);
    }

    if (doRepair || (!tables.includes("AdminUser") && fileExists)) {
      try {
        const { execSync } = require("child_process");
        execSync("npx prisma db push --skip-generate --accept-data-loss", {
          cwd: process.cwd(),
          env: process.env,
          timeout: 20000,
        });
        execSync("npx prisma db seed", {
          cwd: process.cwd(),
          env: process.env,
          timeout: 20000,
        });
        const recheckTables = (await prisma.$queryRawUnsafe(
          "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';"
        )) as Array<{ name: string }>;
        tables = recheckTables.map((t) => t.name);
        adminCount = await prisma.adminUser.count();
        dbError = null;
      } catch (repairErr: any) {
        dbError = "Repair attempted but failed: " + repairErr.message;
      }
    }

    return NextResponse.json({
      status: tables.includes("AdminUser") && adminCount > 0 ? "healthy" : "attention_needed",
      resolvedDatabaseUrl: resolvedUrl,
      fileExistsOnDisk: fileExists,
      fileSizeBytes: fileSize,
      workingDirectory: process.cwd(),
      tablesCount: tables.length,
      tables,
      adminUserCount: adminCount,
      dbError,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "error",
        error: err.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

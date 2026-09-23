import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized session. Please log in again." }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file was provided in the request" }, { status: 400 });
    }

    // Validate size (max 15MB)
    const MAX_SIZE = 15 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File exceeds maximum size limit of 15MB" }, { status: 400 });
    }

    // Validate image MIME type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files (JPEG, PNG, WebP, GIF, SVG, AVIF) are supported" },
        { status: 400 }
      );
    }

    const timestamp = Date.now();
    const safeOriginalName = (file.name || "media")
      .replace(/[^a-zA-Z0-9.-]/g, "_")
      .toLowerCase();
    const filename = `media-${timestamp}-${safeOriginalName}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Target upload locations (support both root and standalone environments)
    const targetDirs = [
      path.join(process.cwd(), "public", "uploads"),
      path.join(process.cwd(), ".next", "standalone", "public", "uploads"),
      path.join(process.cwd(), "..", "public", "uploads"),
      path.join(process.cwd(), "..", ".next", "standalone", "public", "uploads"),
    ];

    for (const dir of targetDirs) {
      try {
        const parentDir = path.dirname(/*turbopackIgnore: true*/ dir);
        if (fs.existsSync(/*turbopackIgnore: true*/ parentDir)) {
          if (!fs.existsSync(/*turbopackIgnore: true*/ dir)) {
            fs.mkdirSync(/*turbopackIgnore: true*/ dir, { recursive: true });
          }
          fs.writeFileSync(/*turbopackIgnore: true*/ path.join(/*turbopackIgnore: true*/ dir, filename), buffer);
        }
      } catch (writeErr) {
        console.warn("Notice: could not write to directory:", dir, writeErr);
      }
    }

    const publicUrl = `/uploads/${filename}`;

    // Register media in database
    const media = await prisma.media.create({
      data: {
        name: file.name,
        url: publicUrl,
        mimeType: file.type || "image/jpeg",
        size: file.size,
      },
    });

    return NextResponse.json({
      success: true,
      url: publicUrl,
      media,
    });
  } catch (error: any) {
    console.error("Media upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error uploading media file" },
      { status: 500 }
    );
  }
}

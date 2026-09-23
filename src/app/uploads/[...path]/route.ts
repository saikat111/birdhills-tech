import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const MIME_MAP: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathSegments } = await params;
    if (!pathSegments || pathSegments.length === 0) {
      return new NextResponse("File path required", { status: 400 });
    }

    // Sanitize path components to prevent directory traversal
    const safeSegments = pathSegments.map((s) => s.replace(/[^a-zA-Z0-9._-]/g, ""));
    const safeRelativePath = safeSegments.join(path.sep);

    // Candidate directories where uploaded files might reside
    const candidateDirs = [
      path.join(process.cwd(), "public", "uploads"),
      path.join(process.cwd(), ".next", "standalone", "public", "uploads"),
      path.join(process.cwd(), "..", "public", "uploads"),
      path.join(process.cwd(), "..", ".next", "standalone", "public", "uploads"),
      path.resolve(__dirname, "../../../public/uploads"),
      path.resolve(__dirname, "../../../../public/uploads"),
    ];

    let targetFilePath: string | null = null;
    for (const dir of candidateDirs) {
      const fullPath = path.join(/*turbopackIgnore: true*/ dir, safeRelativePath);
      if (fs.existsSync(fullPath) && fs.statSync(/*turbopackIgnore: true*/ fullPath).isFile()) {
        targetFilePath = fullPath;
        break;
      }
    }

    if (!targetFilePath) {
      return new NextResponse("File Not Found", { status: 404 });
    }

    const ext = path.extname(targetFilePath).toLowerCase();
    const contentType = MIME_MAP[ext] || "application/octet-stream";
    const fileBuffer = fs.readFileSync(/*turbopackIgnore: true*/ targetFilePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error serving uploaded asset:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

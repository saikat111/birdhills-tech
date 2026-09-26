import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const settings = await prisma.siteSetting.findMany({
    orderBy: { key: "asc" },
  });
  return NextResponse.json({ settings });
}

export async function POST(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { settings } = body;

  if (!settings || typeof settings !== "object") {
    return NextResponse.json({ error: "Invalid settings payload" }, { status: 400 });
  }

  // Updates array of { key: string, value: string, description?: string } or an object { [key]: value }
  const entries: [string, any][] = Array.isArray(settings)
    ? settings.map((item) => [item.key, item.value])
    : Object.entries(settings);

  for (const [key, value] of entries) {
    if (typeof key === "string" && value !== undefined) {
      await prisma.siteSetting.upsert({
        where: { key },
        update: { value: String(value) },
        create: {
          key,
          value: String(value),
          description: `Setting for ${key}`,
        },
      });
    }
  }

  // Instantly revalidate all cached pages and layouts on the main site
  try {
    revalidatePath("/", "layout");
    revalidatePath("/");
    revalidatePath("/contact");
    revalidatePath("/about");
    revalidatePath("/services");
  } catch (err) {
    console.warn("Could not revalidate path cache:", err);
  }

  const updatedSettings = await prisma.siteSetting.findMany({
    orderBy: { key: "asc" },
  });

  return NextResponse.json({ success: true, settings: updatedSettings });
}


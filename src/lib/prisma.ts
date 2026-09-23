import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";

export function resolveDatabaseUrl(): string {
  // If explicitly configured with non-relative path (e.g. Postgres, MySQL, or absolute file path)
  const envUrl = process.env.DATABASE_URL;
  if (envUrl && !envUrl.startsWith("file:.")) {
    return envUrl;
  }

  // Candidate locations for SQLite dev.db across root, standalone, and nested parent execution contexts
  const candidates = [
    path.resolve(process.cwd(), "prisma/dev.db"),
    path.resolve(process.cwd(), "dev.db"),
    path.resolve(process.cwd(), "../prisma/dev.db"),
    path.resolve(process.cwd(), "../../prisma/dev.db"),
    path.resolve(process.cwd(), ".next/standalone/prisma/dev.db"),
    path.resolve(process.cwd(), ".next/standalone/dev.db"),
  ];

  for (const candidate of candidates) {
    try {
      if (fs.existsSync(/*turbopackIgnore: true*/ candidate)) {
        const stats = fs.statSync(/*turbopackIgnore: true*/ candidate);
        if (stats.size > 0) {
          return `file:${candidate}`;
        }
      }
    } catch {
      // Continue to next candidate if inaccessible
    }
  }

  // Fallback to standard prisma path
  return envUrl || `file:${path.resolve(process.cwd(), "prisma/dev.db")}`;
}

const dbUrl = resolveDatabaseUrl();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: dbUrl,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;


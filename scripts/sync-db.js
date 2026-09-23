const fs = require('fs');
const path = require('path');

function copyFileSafe(src, dest) {
  try {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`[sync-db] Copied ${src} -> ${dest}`);
  } catch (err) {
    console.warn(`[sync-db] Notice: Could not copy ${src} -> ${dest}:`, err.message);
  }
}

function copyDirSafe(src, dest) {
  try {
    if (!fs.existsSync(src)) return;
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyDirSafe(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
    console.log(`[sync-db] Synced directory ${src} -> ${dest}`);
  } catch (err) {
    console.warn(`[sync-db] Notice: Could not copy dir ${src} -> ${dest}:`, err.message);
  }
}

function main() {
  const rootDir = path.resolve(__dirname, '..');
  const prismaDb = path.join(rootDir, 'prisma', 'dev.db');
  const rootDb = path.join(rootDir, 'dev.db');

  // 1. Ensure root dev.db and prisma/dev.db are in sync
  if (fs.existsSync(prismaDb) && (!fs.existsSync(rootDb) || fs.statSync(rootDb).size === 0)) {
    copyFileSafe(prismaDb, rootDb);
  } else if (fs.existsSync(rootDb) && (!fs.existsSync(prismaDb) || fs.statSync(prismaDb).size === 0)) {
    copyFileSafe(rootDb, prismaDb);
  }

  // 2. If .next/standalone exists, sync db and assets
  const standaloneDir = path.join(rootDir, '.next', 'standalone');
  if (fs.existsSync(standaloneDir)) {
    const activeDb = fs.existsSync(prismaDb) ? prismaDb : rootDb;
    if (fs.existsSync(activeDb)) {
      copyFileSafe(activeDb, path.join(standaloneDir, 'dev.db'));
      copyFileSafe(activeDb, path.join(standaloneDir, 'prisma', 'dev.db'));
    }

    // Sync public folder
    const publicDir = path.join(rootDir, 'public');
    const standalonePublic = path.join(standaloneDir, 'public');
    copyDirSafe(publicDir, standalonePublic);

    // Sync .next/static folder
    const staticDir = path.join(rootDir, '.next', 'static');
    const standaloneStatic = path.join(standaloneDir, '.next', 'static');
    copyDirSafe(staticDir, standaloneStatic);
  }
}

main();

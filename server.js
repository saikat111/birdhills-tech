const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT, 10) || 3000;

// Auto-sync SQLite dev.db across root, prisma/, and standalone directories
try {
  const rootDb = path.join(__dirname, "dev.db");
  const prismaDb = path.join(__dirname, "prisma", "dev.db");
  const prismaDir = path.join(__dirname, "prisma");

  if (fs.existsSync(prismaDb) && (!fs.existsSync(rootDb) || fs.statSync(rootDb).size === 0)) {
    fs.copyFileSync(prismaDb, rootDb);
    console.log("[Hostinger Boot] Synced prisma/dev.db -> root dev.db");
  } else if (fs.existsSync(rootDb) && (!fs.existsSync(prismaDb) || fs.statSync(prismaDb).size === 0)) {
    if (!fs.existsSync(prismaDir)) fs.mkdirSync(prismaDir, { recursive: true });
    fs.copyFileSync(rootDb, prismaDb);
    console.log("[Hostinger Boot] Synced root dev.db -> prisma/dev.db");
  }
} catch (e) {
  console.warn("[Hostinger Boot] DB sync notice:", e.message);
}

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("internal server error");
      }
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Bird Hills Tech server listening on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Server startup error:", err);
    process.exit(1);
  });

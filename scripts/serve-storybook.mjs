import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "storybook-static");
const mime = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};
const port = 6007;

createServer((request, response) => {
  const requestPath = new URL(request.url ?? "/", "http://localhost").pathname;
  const relativePath = normalize(requestPath === "/" ? "/index.html" : requestPath).replace(
    /^[/\\]+/,
    "",
  );
  const filePath = join(root, relativePath);
  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, {
    "content-type": mime[extname(filePath)] ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1");

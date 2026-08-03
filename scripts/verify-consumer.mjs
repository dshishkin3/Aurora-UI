import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const consumerDir = mkdtempSync(join(tmpdir(), "ui-consumer-"));
let archive;
try {
  const npmEnv = { ...process.env, npm_config_cache: join(process.cwd(), ".npm-cache") };
  const archiveName = execFileSync("npm", ["pack", "--json"], { encoding: "utf8", env: npmEnv });
  archive = JSON.parse(archiveName)[0].filename;
  const { name } = JSON.parse(readFileSync("package.json", "utf8"));
  writeFileSync(
    join(consumerDir, "package.json"),
    JSON.stringify({
      name: "consumer-check",
      private: true,
      type: "module",
      dependencies: {
        [name]: `file:${join(process.cwd(), archive)}`,
        react: `file:${join(process.cwd(), "node_modules/react")}`,
        "react-dom": `file:${join(process.cwd(), "node_modules/react-dom")}`,
      },
    }),
  );
  execFileSync("npm", ["install", "--offline", "--ignore-scripts", "--no-audit", "--no-fund"], {
    cwd: consumerDir,
    stdio: "inherit",
    env: npmEnv,
  });
  execFileSync(
    "node",
    [
      "--input-type=module",
      "--eval",
      `import('${name}').then(({ Button }) => { if (!Button) process.exit(1) })`,
    ],
    { cwd: consumerDir, stdio: "inherit" },
  );
} finally {
  rmSync(consumerDir, { recursive: true, force: true });
  if (archive) rmSync(join(process.cwd(), archive), { force: true });
}

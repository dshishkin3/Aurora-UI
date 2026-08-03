import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./visual-tests",
  use: { baseURL: "http://127.0.0.1:6007", viewport: { width: 1280, height: 900 } },
  webServer: {
    command: "npm run build-storybook && node scripts/serve-storybook.mjs",
    url: "http://127.0.0.1:6007",
    reuseExistingServer: !process.env.CI,
  },
});

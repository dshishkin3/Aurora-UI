import { expect, test } from "@playwright/test";

test("Button primary is visually stable", async ({ page }) => {
  await page.goto("/iframe.html?id=components-button--default");
  await expect(page).toHaveScreenshot("button-default.png", { fullPage: true });
});

test("Dialog renders in dark theme", async ({ page }) => {
  await page.goto("/iframe.html?id=components-dialog--default");
  await page.getByRole("button", { name: "Открыть диалог", exact: true }).click();
  await expect(page).toHaveScreenshot("dialog-default.png", { fullPage: true });
});

import { test, expect } from '@playwright/test';

test('Google search demo', async ({ page }) => {

  // Open Google
  await page.goto('https://www.google.com');
  console.log("Running CI automation demo");
  // Type search query
  await page.fill('[name="q"]', 'Playwright Test automation by NiteshJain QaTestology');

  // Press Enter
  await page.keyboard.press('Enter');

  // Verify results page loads
  await expect(page).toHaveTitle(/Playwright/);

});

const { test, expect } = require('@playwright/test');

test('TC-LOGIN-001: Login with valid credentials', async ({ page }) => {
  // Step 1: Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter valid credentials
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  // Step 3: Click Login
  await page.locator('#login-button').click();

  // Step 4: Verify successful login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});


test('TC-LOGIN-002: Login with invalid credentials', async ({ page }) => {
  // Step 1: Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter invalid credentials
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('wrong123');

  // Step 3: Click Login
  await page.locator('#login-button').click();

  // Step 4: Verify login is rejected
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Username and password do not match any user in this service');
});

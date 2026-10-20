import { test, expect } from '@playwright/test';

test('TC-CHECKOUT-001: Complete checkout with valid information', async ({ page }) => {

  // Step 1: Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Step 3: Add Sauce Labs Backpack to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Step 4: Open shopping cart
  await page.locator('.shopping_cart_link').click();

  // Step 5: Click checkout
  await page.locator('#checkout').click();

  // Step 6: Enter First name, Last name, Postal Code
  await page.locator('#first-name').fill('John');
  await page.locator('#last-name').fill('Wick');
  await page.locator('#postal-code').fill('B1H 3N4');

  // Step 7: Click continue
  await page.locator('#continue').click();

  // Step 8: Check Url
  await expect(page).toHaveURL(/checkout-step-two.html/);

  
  // Step 9: Verify checkout overview
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');

  await expect(page.locator('.cart_quantity'))
    .toHaveText('1');

  // Verify product price and order total
  await expect(page.locator('.inventory_item_price'))
    .toHaveText('$29.99');

  await expect(page.locator('.summary_subtotal_label'))
    .toContainText('Item total: $29.99');


  // Step 10: Complete the order
  await page.locator('#finish').click();

  // Step 11: Verify order confirmation
  await expect(page).toHaveURL(/checkout-complete.html/);

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

});
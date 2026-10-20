
import { test, expect } from '@playwright/test';

test('TC-CART-001: Add a product to the cart', async ({ page }) => {

  // Step 1: Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Step 3: Add Sauce Labs Backpack to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Step 4: Verify cart badge displays 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 5: Open shopping cart
  await page.locator('.shopping_cart_link').click();

  // Step 6: Verify product name and quantity
  
  await expect(page.locator('.cart_quantity')).toHaveText('1');

  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

});

test('TC-CART-002: Remove a product from the cart', async ({ page }) => {

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

  // Step 5: Verify product name and quantity
  
  await expect(page.locator('.cart_quantity')).toHaveText('1');

  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // Step 6: Remove item
  await page.locator('#remove-sauce-labs-backpack').click();

  // Step 7: Verify product removed
  
  await expect(page.locator('.cart_quantity')).toHaveCount(0);

  await expect(page.locator('.inventory_item_name')).toHaveCount(0);

});


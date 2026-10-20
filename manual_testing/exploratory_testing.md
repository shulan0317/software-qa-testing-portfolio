# Exploratory Testing Notes

## EXP-001 — Shopping Cart State Persistence

**Application:** SauceDemo  
**Test Account:** standard_user  
**Test Type:** Exploratory Testing  
**Result:** Pass

### Test Objective

Verify that shopping cart contents remain consistent when navigating between the Products page and the product details page.

### Steps Performed

1. Log in using a valid account.
2. Ensure the shopping cart is empty.
3. Add Sauce Labs Backpack to the cart.
4. Open the product details page.
5. Return to the Products page.
6. Open the shopping cart and review its contents.

### Actual Observations

- The shopping cart badge continued to display 1.
- Sauce Labs Backpack remained in the cart.
- The product price and quantity remained correct.
- The product button on the Products page changed from "Add to cart" to "Remove" after the product was added.

### Assessment

The cart contents remained consistent during navigation. The button state change appears consistent with the application's add/remove interaction design.

No confirmed defect was identified during this test.

**Status:** Pass

## EXP-002 — Product Button State Synchronization

**Test Type:** Exploratory Testing  
**Test Account:** standard_user  
**Status:** Pass

### Test Objective

Verify that product button states and shopping cart contents remain synchronized across the Products and Cart pages.

### Steps Performed

1. Log in with a valid account.
2. Add Sauce Labs Backpack to the cart.
3. Verify that the button changes to "Remove" and the cart badge displays 1.
4. Navigate to the Cart page.
5. Remove Sauce Labs Backpack from the cart.
6. Return to the Products page.
7. Review the product button and cart badge.

### Actual Observations

- The product was successfully removed from the cart.
- The product button returned to "Add to cart".
- The shopping cart badge no longer displayed a quantity.
- Product and cart states remained consistent across pages.

### Assessment

The application behaved as expected. No defect was identified.

**Result:** Pass
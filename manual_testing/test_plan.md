# SauceDemo — Manual Test Plan

**Project:** SauceDemo E-commerce Website Testing  
**Application Under Test:** https://www.saucedemo.com/  
**Test Type:** Manual Functional Testing  
**Test Environment:** Windows 11 / Google Chrome (Desktop)  
**Status:** Draft

## 1. Objective

The objective of this project is to verify the core functionality of the SauceDemo e-commerce application through structured manual testing.

Testing will focus on user authentication, product browsing, shopping cart operations, and the checkout process.

## 2. Scope

### In Scope
- Login with valid and invalid credentials
- Required field validation on the login page
- Product sorting
- Adding and removing products from the shopping cart
- Shopping cart item verification
- Checkout form validation
- Successful order completion

### Out of Scope
- Performance and load testing
- Security penetration testing
- Mobile application testing
- Backend database validation
- Payment processing integration

## 3. Testing Approach

Manual functional testing will be performed using predefined test cases.

The following testing techniques will be used:

- **Positive Testing:** Verify that valid user actions produce the expected results.
- **Negative Testing:** Verify that invalid inputs are handled correctly.
- **Boundary Value Testing:** Verify relevant input boundaries where applicable.
- **Regression Testing:** Re-execute selected test cases during the later regression testing phase.

Test execution results will be recorded as Pass, Fail, or Blocked.

## 4. Test Environment

- Operating System: Windows 11
- Browser: Google Chrome (Desktop)
- Application URL: https://www.saucedemo.com/
- Primary Test Account: standard_user
- Documentation: Markdown and Microsoft Excel

## 5. Entry Criteria

- The application is accessible.
- Test credentials are available.
- Test cases have been prepared.

## 6. Exit Criteria

- All planned manual test cases have been executed or marked Blocked with reasons.
- Expected and actual results have been documented.
- Any observed defects have been recorded.
- A test execution summary has been completed.

## 7. Deliverables

- Manual Test Plan
- Test Cases and Execution Results
- Bug Reports (if defects are identified)
- Regression Testing Report (later phase)
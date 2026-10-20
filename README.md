# Software QA Testing Portfolio

A hands-on Software Quality Assurance portfolio demonstrating manual functional testing, exploratory testing, UI test automation, regression testing, and REST API testing.

## 1. Project Overview

This portfolio contains two testing projects:

**Project 1: SauceDemo Web Application Testing**

Functional and automated testing of [SauceDemo](https://www.saucedemo.com/), an e-commerce demonstration application.

**Project 2: Postman Echo API Testing**

REST API request and response validation using Postman Echo.

These projects demonstrate practical testing skills, including test case design, execution, assertions, and test documentation.

## 2. Tools and Technologies

- **Manual Testing:** Excel, Markdown
- **UI Automation:** Playwright, JavaScript, Node.js
- **API Testing:** Postman
- **Browser:** Chromium
- **Development Environment:** Visual Studio Code
- **Version Control:** Git and GitHub

## 3. Test Coverage

### Manual Functional Testing

Designed and executed 10 functional test cases covering:

- User authentication
- Product browsing
- Shopping cart operations
- Checkout workflow
- Required field validation

**Results:** 10 Passed, 0 Failed.

### Exploratory Testing

Executed two exploratory scenarios focused on:

- Shopping cart state persistence
- Product button state synchronization

**Results:** 2 Passed, 0 Confirmed Defects.

### UI Test Automation

Developed five automated Playwright tests:

| Module | Test Cases |
|---|---|
| Login | Valid and invalid credentials |
| Shopping Cart | Add and remove products |
| Checkout | Complete checkout with valid information |

**Results:** 5 Passed, 0 Failed.

All five automated tests also passed the final regression test run using Chromium.

### REST API Testing

Created a Postman collection using the Postman Echo service.

Covered:

- GET request validation
- POST request validation
- HTTP status code assertions
- JSON response validation

**Results:** 2 requests tested, 4 assertions passed.

## 4. Defect Reporting

No confirmed application defects were identified within the executed test scenarios.

The portfolio includes documentation of the defect reporting process, including reproduction steps, expected and actual results, severity, priority, and supporting evidence.

Passing tests do not guarantee that an application is defect-free.

## 5. Project Structure

```text
QA/
├── README.md
├── manual_testing/
│   ├── test_plan.md
│   ├── test_cases.xlsx
│   ├── exploratory_testing.md
│   └── bug_reports.md
├── automation/
│   ├── tests/
│   │   ├── login.spec.js
│   │   ├── cart.spec.js
│   │   └── checkout.spec.js
│   ├── playwright.config.js
│   ├── package.json
│   └── package-lock.json
└── api_testing/
    └── Postman_Echo_API_Testing.postman_collection.json
```

## 6. Running Automated Tests

**Prerequisites:** Node.js and npm.

Navigate to the automation directory:

```bash
cd automation
npm ci
npx playwright install chromium
npx playwright test --project=chromium
```

To view the HTML report:

```bash
npx playwright show-report
```

## 7. API Testing Instructions

1. Open Postman.
2. Import `Postman_Echo_API_Testing.postman_collection.json`.
3. Open the GET or POST request.
4. Click Send.
5. Review the response and assertion results.

## 8. Testing Limitations

- Testing focused on selected functional scenarios rather than comprehensive application coverage.
- Automated UI testing was performed using Chromium.
- API testing used Postman Echo independently of SauceDemo.
- No confirmed defects were identified during the executed tests.
- Additional browsers, devices, and edge cases may reveal issues outside the current scope.

## 9. Project Outcome

This portfolio demonstrates the ability to design and execute functional tests, develop basic UI automation, validate API responses, document test results, and perform regression testing.

The project was developed as a practical demonstration of entry-level Software QA and Testing skills.
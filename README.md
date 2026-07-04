# Redmine Playwright Automation Suite

## Summary of repo
This repository contains an automated end-to-end (E2E) Smoke and Sanity test suite for Redmine using Playwright. The project implements the Page Object Model (POM) architectural pattern with strictly isolated locators and clean test scripts. The test suite is optimized to validate critical public and initial security workflows (Registration, Authentication step 1, Global Search, and Navigation) while safely bypassing 2FA constraints.

## Requirements
- Node.js (v18 or higher)
- npm (v9 or higher)
- Playwright

## Steps to install
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/ewsfme/redmine-playwright.git
2. Navigate to the project root directory:
   ```bash
   cd task2
3. Install all required dependencies:
   ```bash
   npm install
Ensure that your valid test credentials are added to the created .env file before launching the authentication tests.

## Steps to launch
1. To run all tests in the default headless mode:
    ```
   npm run test:headless

2. To launch tests in headed mode:
   ```
   npx playwright test --headed

    To open the Playwright UI mode:
   ```
   npx playwright test --ui

## Steps to creating the report:
1. Execute the test suite: 
   ```
   npm test

2. Generate HTML report file: 
   ```
   npm run report
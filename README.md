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
   git clone <your-repository-url>
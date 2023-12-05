# User Registration and Insurance Selection Web Application

This web application allows users to register and select insurance options. It is divided into several pages, each with specific functionality and validation rules.

## Demo

**Live Demo**: [View Live Demo](https://car-insurance-blue.netlify.app/)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Integration](#api-integration)

## Installation

Clone this repository:

   ```bash
   git clone https://github.com/samanabasi/car-insurance.git
   cd car-insurance
```
---

## Usage
To start the web application, run:

  ```bash
    yarn
    yarn start
```
---

## Features

### User Registration

- Users can register with the following details:
  - First Name
  - Last Name
  - Mobile Number
  - Password
- Validation rules for user registration:
  - All fields are mandatory.
  - Mobile numbers must be in the correct format.
  - First and last names should only contain Persian (Farsi) characters.
  - Passwords must be complex (at least one number, one uppercase Latin character, one lowercase Latin character, and 4 to 10 characters in length).
- Error messages are displayed for each validation error.
- Mock user registration is available, displaying the user's first name and last name in the Navbar upon successful registration.

### Insurance Selection
- Users can select insurance options, including:
  - Third-Party Insurance
  - Comprehensive Insurance
- Selections are visually represented, and users can easily switch between options.

### Vehicle Selection
- Using the `getVehicleTypes` API, the application fetches various car types from the server.
- Users can choose their car type and model from the available options.
- The "Back" button is always active, allowing users to return to the previous page.
- The "Next Step" button becomes active when users select options correctly, taking them to the next page.

### Insurance Company Selection
- Using the `getInsureCompanies` API, the application retrieves a list of insurance companies.
- Users can select their preferred insurance company from the list of options.

### Discounts and Summary
- Using the `getThirdDiscounts` API, the application fetches third-party insurance discounts and driver accident discounts.
- Users can select applicable discounts.
- By clicking the "Check Summary" button, a modal displays a summary of the entered information from the first page.

---

## API Integration
For the proper functioning of this application, you'll need to set up the following APIs or server endpoints:

getVehicleTypes: An API to fetch car types from the server.
getInsureCompanies: An API to retrieve a list of insurance companies.
getThirdDiscounts: An API to fetch third-party insurance discounts and driver accident discounts.

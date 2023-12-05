# User Registration and Insurance Selection Web Application

This web application allows users to register and select insurance options. It is divided into several pages, each with specific functionality and validation rules.

## Demo

**Live Demo**: [View Live Demo](https://car-insurance-blue.netlify.app/)

## Getting Started

To begin using this Vendors List application, follow these simple steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/samanabasi/car-insurance.git
    cd car-insurance


2. Install the dependencies:

   ```bash
    yarn


3. Start the development server:

   ```bash
    yarn start


## Folder Structure

The project structure is organized as follows:
car-insurance/
 ```
├── src/
│ ├── assets/ # Contains assets and icons
│ ├── components/ # Reusable components
│ ├── context/ # Utility functions and constants
│ ├── hooks/ # Reusable hooks such as useAuth
│ ├── pages/ # pages
│ ├── utils/ # Utility functions and constants
│ ├── App.tsx # Main application component
│ ├── index.tsx # Entry point
│ └── ... # Other files and folders
├── public/: # Includes public assets and static files.
├── package.json and package-lock.json: Define project dependencies and versions.
└── README.md # You're currently reading it! This README provides detailed information about the project's structure, features, and usage.
```
## Technologies Used

This Car Insurance application leverages various technologies and libraries to deliver a powerful and responsive user experience. Here's a list of the key technologies used:

- React.js: A JavaScript library for building user interfaces.
- React Hook Form: A package that makes form validation easy by aligning with the existing HTML standard for form validation.
- TypeScript: A typed superset of JavaScript that enhances code quality and maintainability.
- React Loading Skeleton: A library for displaying skeleton loading UI.
- React Modal: Accessible modal dialog component for React.JS.
- Create React App: A boilerplate for setting up a React application.
- SASS: A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.

## Features
This Car Insurance application comes packed with features that make it a powerful tool for managing and visualizing data. Here's a glimpse of some of the key features:

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


## API Integration
For the proper functioning of this application, you'll need to set up the following APIs or server endpoints:

getVehicleTypes: An API to fetch car types from the server.
getInsureCompanies: An API to retrieve a list of insurance companies.
getThirdDiscounts: An API to fetch third-party insurance discounts and driver accident discounts.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.

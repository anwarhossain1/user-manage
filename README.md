# User Manager - A system to manage user's details.

This is a react app that will allow admins to add, update, disable / enable employees, and change their roles. In the listing table, admin should be able to search users details by name, email or phone number.

## Prerequisites

> \*\*use node

## Installation

To run this project into your environment

```
git clone https://github.com/anwarhossain1/user-manage

yarn or npm install
yarn start or npm start
```

## Technical Choices

- **React**- React has been used into this application because of making this application fast, scalable, and simple. It works only on user interfaces in the application. Also data can be changed without reloading the page.
- **Redux**- For giving the store's access to the class components, redux has been used as a state management tools which efficiently handles data flow and manupulates them into the state.
- **Local Storage**- Local storage has been used for storing user's data in browser's local storage.

- **Material Ui**- Material Ui has been used as a css framework.

###### Testing

- **JEST**- For unit testing and accessing **DOM**, JEST has been used. It is often good enough for testing React components.
- **React Testing Library**- For Tesing React components without relying on their implementation details.

# Engage platform App

A Single page application that fetches and displays the users details.\
The site is responsive and makes use of Engage Integration API to display the user data.\
It also makes use of a back end proxy server to ensure the security of the api keys.\

Things I would like to improve:
- implement Routes to update the url appropriately when selecting users
- implement tests (I only have experience writing back end tests)
- use TanStack / React Query

## Built using:

- React
- Express
- Material UI
- Engage Integration API

## Running this project locally

Please create a file named '.env' and replace Value of tenantId and Value of Authorization below with the API keys:

```
VITE_TENANTID=Value of tenantId
VITE_AUTHORIZATION=Bearer Value of Authorization
```

After forking and cloning this repo, navigate to the project directory. Install the required dependencies and start the development server with the following commands:

```
npm install
npm start
npm run dev
```

Vite will display a message in the terminal to notify where the app is hosted. This is usually at http://localhost:5173/.

## Prerequisites

This project was built using Node.js v20.0.0.

## Dependencies

```
"@emotion/react": "^11.11.1",
"@emotion/styled": "^11.11.0",
"@fontsource/roboto": "^5.0.8",
"@mui/lab": "^5.0.0-alpha.152",
"@mui/material": "^5.14.17",
"axios": "^1.6.1",
"cors": "^2.8.5",
"dotenv": "^16.3.1",
"express": "^4.18.2",
"nodemon": "^3.0.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.18.0"
```

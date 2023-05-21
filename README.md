# finalMileAstroLogistics
<br>
The Wormhole awaits -- *
<br>
<img width="570" alt="4ppp" src="https://github.com/theCephusHasLanded/finalMileAstroLogistics/assets/113807743/8ca262b4-8596-429d-ad0a-52130c85891d">
<img width="570" alt="3ppp" src="https://github.com/theCephusHasLanded/finalMileAstroLogistics/assets/113807743/db51bd48-e6eb-4bc2-8695-92357c384166">
<img width="570" alt="2ppp" src="https://github.com/theCephusHasLanded/finalMileAstroLogistics/assets/113807743/cf7aa715-9d37-42ff-9981-f1ce3bd13a64">
<img width="570" alt="1ppp" src="https://github.com/theCephusHasLanded/finalMileAstroLogistics/assets/113807743/deaf734e-4e5d-4a16-80bf-462d635753da">

<br>
Planet Purchase Plans - Backend
The backend of Planet Purchase Plans is responsible for handling the server-side logic and database operations. It is built using the PERN stack (PostgreSQL, Express.js, React.js, and Node.js). This repository contains the server-side code that powers the API endpoints for managing planets.

# Webpage Deployed!
- [Deployed Front-end URL] ()
- [Deployed Back-end URL] ()
- [Trello Board](https://trello.com/b/cJ5UvCl9/cephus-portfolio-mod-4)

Prerequisites
Node.js (v14 or above)
PostgreSQL (v10 or above)
Getting Started
Clone this repository to your local machine.
Install the dependencies by running npm install.
Create a PostgreSQL database for the application.
Update the database connection details in the .env file.
Run the database migration script to set up the required tables by running npm run db:init.
(Optional) Seed the database with sample data by running npm run db:seed.
Start the server by running npm start.
The server will start running on http://localhost:5000 by default.

API Endpoints

GET /planets - Retrieve all planets.

GET /planets/:id - Retrieve a specific planet by ID.

POST /planets - Create a new planet.

PUT /planets/:id - Update a planet by ID.

DELETE /planets/:id - Delete a planet by ID.

Refer to the API documentation for detailed information about the request and response formats.

Environment Variables
The following environment variables need to be set in the .env file:

DB_HOST - PostgreSQL database host.

DB_PORT - PostgreSQL database port.

DB_NAME - PostgreSQL database name.

DB_USER - PostgreSQL database username.

DB_PASSWORD - PostgreSQL database password.

Contributing
Contributions to Planet Purchase Plans are always welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

Planet Purchase Plans - Frontend
The frontend of Planet Purchase Plans is built using React.js and interacts with the backend API to provide a user-friendly interface for browsing and purchasing planets. This repository contains the client-side code responsible for rendering the user interface and handling user interactions.

Prerequisites
Node.js (v14 or above)
Getting Started
Clone this repository to your local machine.
Install the dependencies by running npm install.
Start the development server by running npm start.
The application will be accessible at http://localhost:3000 by default.

Features
Browse and search for available planets.
View detailed information about each planet.
Add planets to the shopping cart.
Purchase selected planets.
Environment Variables
The frontend application does not require any specific environment variables.

Contributing
Contributions to Planet Purchase Plans are always welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request. Let's make the user experience out of this world!

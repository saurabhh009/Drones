# Drone Management Backend Website

Welcome to the Drone Management Backend, a robust platform designed to handle the backend operations for managing drones efficiently and securely. Our backend provides the necessary APIs and authentication mechanisms to support drone registration, mission planning, and more.

## Introduction

Drones have revolutionized numerous industries, including aerial photography, agriculture, construction, surveillance, and more. As the adoption of drones continues to grow, the need for robust management tools becomes increasingly crucial. Our Drone Management Backend aims to address this need by offering a feature-rich platform tailored to the unique requirements of drone operators, with enhanced security provided by JWT authentication.

## Key Features

- **User Authentication**: Securely manage access to the platform with user authentication and authorization mechanisms using JWT tokens.
- **Drone Registration**: Register drones with detailed information.
- **Site Management**: Organize drone operations by defining sites where drones are deployed and specifying relevant information such as location and permissions.
- **Mission Planning**: Plan and schedule missions for drones, including waypoints.
- **Assigning Categories to Users**: Categories are created independently and then mapped to users.
- **Assigning Sites to Users**: Sites are created independently and then mapped to users.
- **Other Endpoints**: Additional endpoints are available to access various details.

## How It Works

Our Drone Management Backend serves as the backbone of your drone management application, handling core functionalities such as user authentication, data storage, and business logic. With JWT authentication, users can securely access API endpoints and perform operations on drones and missions.

## Prerequisites

Before running the Drone Management Backend, ensure you have the following installed on your system:

- Node.js
- MongoDB

## How to Run

1. Create a MongoDB database named 'Drones'.
2. Set the MongoDB connection URL to "mongodb://0.0.0.0:27017/Drones".
3. Start the server:
   - Production mode: `npm start`
   - Development mode (with automatic reloads): `npm run dev`

## Endpoints Documentation

For documentation on available endpoints and how to use them, refer to the provided Postman collection link given below.
https://winter-eclipse-855295.postman.co/workspace/New-Team-Workspace~ebc78682-be6f-4ee5-a14b-b13b142779d2/collection/31076875-611e2c65-47ad-41a4-825b-cb05882b5936?action=share&creator=31076875 

## Packages Used

The Drone Management Backend utilizes the following packages:
- mongoose
- jsonwebtoken
- express
- nodemon
- bcrypt
- body-parser


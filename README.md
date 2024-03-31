# travel-booking-api--nodejs-epxress-mongodb

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Installation and Usage](#installation-and-usage)
4. [API Endpoints](#api-endpoints)

## Introduction

Welcome to my Node.js API built with Express! This API serves as a backend system for managing traveling system. With a strong focus on security.

### Features

Authentication and Authorization: Includes signup, login, logout, password reset, and forgot password functionalities.
User Management: Users can update their information such as profile photo, email address, name, etc.
Role-based Access Control: Different user roles dictate permissions, enabling or restricting actions based on user privileges.

Admins and lead guides can perform CRUD and other special operations on tours.
such as monthly plans, top 5 cheapest tours, and more. Distance calculation is another feature in this api. Users can filter tours based on proximity, with options like viewing tours within a certain distance.
Users can book a tour and leave reviews for tours.

It was developed keeping in mind for solid and dry principals to ensure maintainability and scalability.

## Tech Stack

### Security

- bcryptjs: ^2.4.3
- express-mongo-sanitize: ^2.2.0
- helmet: ^7.1.0
- hpp: ^0.2.3
- jsonwebtoken: ^9.0.2
- xss-clean: ^0.1.4

### Libraries & Modules

- dotenv: ^16.4.5
- express: ^4.18.2
- express-rate-limit: ^7.2.0
- mongodb: ^6.3.0
- mongoose: ^5.5.2
- morgan: ^1.10.0
- nodemailer: ^6.9.12
- sharp: ^0.33.3
- slugify: ^1.6.6
- stripe: ^7.0.0
- validator: ^10.11.0

## Installation and Usage

### Prerequisites

- Node.js version 18.17.1 or later
- MongoDB Atlas account or local MongoDB server running

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/omerfarukgulhan/travel-booking-api--nodejs-epxress-mongodb.git
```

2. Start the server:

```bash
npm install
npm start
```

Server should be running on http://localhost:3000

## API Endpoints

### User Endpoints

- `GET /api/v1/users`: Retrieves all users (admin access only).
- `GET /api/v1/users/:id`: Retrieves a user by ID (admin access only).
- `GET /api/v1/users/me`: Retrieves the profile information of the logged-in user.
- `GET /api/v1/users/logout`: Logs out a user.
- `PATCH /api/v1/users/resetPassword/:token`: Resets the password for a user.
- `PATCH /api/v1/users/updateMe`: Updates the profile information of the logged-in user.
- `PATCH /api/v1/users/updateMyPassword`: Updates the password for the logged-in user.
- `PATCH /api/v1/users/:id`: Updates a user by ID (admin access only).
- `POST /api/v1/users/signup`: Creates a new user account.
- `POST /api/v1/users/login`: Logs in a user.
- `POST /api/v1/users/forgotPassword`: Initiates the forgot password process.
- `DELETE /api/v1/users/:id`: Deletes a user by ID (admin access only).
- `DELETE /api/v1/users/deleteMe`: Deletes the account of the logged-in user (account deactivation).

### Tour Endpoints

- `GET /api/v1/tours`: Retrieves all tours.
- `GET /api/v1/tours/top-5-cheap`: Retrieves the top 5 cheapest tours.
- `GET /api/v1/tours/tour-stats`: Retrieves statistics for tours.
- `GET /api/v1/tours/monthly-plan/:year`: Retrieves monthly plans for tours.
- `GET /api/v1/tours/tours-within/:distance/center/:latlng/unit/:unit`: Retrieves tours within a certain distance.
- `GET /api/v1/tours/distances/:latlng/unit/:unit`: Retrieves distances from a certain point.
- `GET /api/v1/tours/:id`: Retrieves a tour by ID.
- `PATCH /api/v1/tours/:id`: Updates a tour by ID (admin and lead guide access only).
- `POST /api/v1/tours`: Creates a new tour (admin and lead guide access only).
- `DELETE /api/v1/tours/:id`: Deletes a tour by ID (admin and lead guide access only).

### Review Endpoints

- `GET /api/v1/reviews`: Retrieves all reviews.
- `GET /api/v1/reviews/:id`: Retrieves a review by ID.
- `PATCH /api/v1/reviews/:id`: Updates a review by ID (user and admin access only).
- `POST /api/v1/reviews`: Creates a new review (user access only).
- `DELETE /api/v1/reviews/:id`: Deletes a review by ID (user and admin access only).

### Booking Endpoints

- `GET /api/v1/bookings`: Retrieves all bookings.
- `GET /api/v1/bookings/:id`: Retrieves a booking by ID.
- `GET /api/v1/bookings/checkout-session/:tourId`: Retrieves the checkout session for a specific tour.
- `PATCH /api/v1/bookings/:id`: Updates a booking by ID.
- `POST /api/v1/bookings`: Creates a new booking.
- `DELETE /api/v1/bookings/:id`: Deletes a booking by ID.

Certain actions are restricted to required roles.

# Doctor Appointment System

A full-stack web application to simplify and enhance the appointment booking process for healthcare facilities. This system features role-based access control, allowing administrators to manage doctors, patients, and appointments with ease.

## Features

- **Admin Panel**: Full control over doctors, patients, and appointments.
- **Patient Profile**: Patient can book an appointment and view the appointment's status.
- **Appointment Booking**: Simplified and user-friendly process for patients.
- **Responsive UI**: Built with modern design principles for seamless experience across devices.

## Tech Stack

### Frontend:
- **React** with **Vite**
- **Tailwind CSS** for styling

### Backend:
- **Node.js** and **Express**
- **MongoDB** for the database
- **Mongoose** for MongoDB object modeling

### Additional Tools:
- **JWT** for secure authentication
- **Axios** for API requests
- **Bcrypt** for password encryption
- **Multer** for file uploading 
- **Cloudinary** for images optimization

## Getting Started

### Prerequisites


1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine
   ```bash
   git clone https://github.com/usmans-github/h-m-s.git
3. Create a MongoDB database and obtain your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) OR [MongoDB Compass](https://www.mongodb.com/products/tools/compass)

### Environment Variables

Create a ``.env`` file in root  and add the following environment variables:

```
PORT=3000
MONGO_URI=ADD_YOUR_MONGO_URI_HERE 
JWT_SECRET=ADD_YOUR_JWT_SECRET_HERE 
ADMIN_EMAIL=admin@healthcare.com
ADMIN_PASSWORD=admin@healthcare
CLOUDINARY_CLOUD_NAME=ADD_YOUR_CLOUDINARY_CLOUD_NAMe
CLOUDINARY_API_KEY=ADD_YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=ADD_YOUR_CLOUDINARY_API_SECRET
```
### Dependencies

Run the following commands to install dependencies for both the frontend and backend:

```
npm install
cd frontend
npm install
```

### Run
To run Backend use this command:
```
npx nodemon app.js
```
To run Frontend use this command:
```
npm run dev
```

``important note`` You have to manually create admin in database and change it in env variables also !

## Example User Logins

### Patient Login:

- Email:  ``test@test.com``
- Password:  ``test``
### Admin Login:

- Email:  ``admin@healthcare.com``
- Password:  ``admin``


Feel free to customize the appointments as admin and book the appointments as Patient !
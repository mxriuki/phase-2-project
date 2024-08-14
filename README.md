# Best Eats - Food Delivery App

Welcome to the Best Eats project! This is a food delivery application that allows users to browse through a variety of dishes, add items to their cart, and place orders. The app is designed to provide a seamless and enjoyable user experience with fast delivery services.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Container**: Displays the hero section with delivery information and call-to-action button.
- **Menu Container**: Shows various food categories and allows filtering of items.
- **Row Container**: Displays food items in a scrollable or grid format based on the category.
- **Cart Container**: Allows users to view and manage items in their cart.
- **Responsive Design**: Ensures a smooth experience across different devices and screen sizes.
- **Local Storage**: Persists cart items across page reloads using local storage.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Framer Motion**: For animations and transitions.
- **React Icons**: For iconography.
- **React Context API**: For state management.

## Installation

To get started with the project, follow these steps:

```bash
## Clone the Repository
git clone

## Navigate to the Project Directory
cd best-eats

#np Install Dependencies
npm install

# Run the Development Server
npm start

## If experiencing any errors after cloning 
npm install react-router-dom framer-motion react-icons firebase tailwind-scrollbar
npm start

After setting up the project, you can use the following commands to interact with the application:

- **Start Development Server**: Start the server in development mode to see the app running locally.

```bash
npm start

## Usage


Once the server is running, open your browser and navigate to http://localhost:3000 to view the application. You can browse the menu, add items to your cart, and place orders.

##Folder Structure


best-eats/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── HomeContainer.js
│   │   ├── MenuContainer.js
│   │   ├── CartContainer.js
│   │   └── RowContainer.js
│   ├── context/
│   │   └── CartContext.js
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.js
│   └── index.js
└── package.json


## License

This project is licensed under the MIT License. See the LICENSE file for more information.

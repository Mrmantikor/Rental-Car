# RentalCar

**RentalCar** is a car rental web application built from scratch as part of an educational assignment. The goal was to create a complete user interface for a company offering vehicle rental services. The project is built using **React** and a modern tech stack, integrated with a real backend API.

## Features

The application allows users to:

- Browse available cars in the catalog.
- Filter vehicles by brand, price, and mileage.
- Add favorite cars to a **"Favorites"** list (persisted across page reloads).
- View detailed information on a selected car.
- Book a car by submitting a rental form.

It uses an external API that returns car listings and supports **server-side filtering and pagination**, making the catalog experience fast and realistic.

## Main Pages

- **Home** — features a banner and call-to-action to explore the catalog.
- **Catalog** — displays cars, filtering options, and a "Load More" button for pagination.
- **Car Details** — shows full car information and a rental booking form.

## Technologies Used

- ⚛️ **React + Vite** — for fast, modular development.
- 📦 **Redux Toolkit** — for centralized state management.
- 🌐 **React Router** — for client-side routing.
- 🔗 **Axios** — for handling API requests.
- 🎨 **SCSS + BEM** — for structured and scalable styling.

## Key Implementation Details

- ✅ Filtering is performed **on the server**, not on the client side.
- 📥 Pagination is implemented via a **"Load More"** button that fetches data from the backend.
- ⭐ A **Favorites** list is stored in `localStorage` and restored on reload.
- 📝 The booking form includes validation and success notifications.
- 🚗 Mileage values are auto-formatted with spacing.

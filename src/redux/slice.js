import { createSlice } from "@reduxjs/toolkit";
import { getCarById, getCarsList } from "./operations.js";

const initialState = {
  carsList: [],
  favoriteCars: [],
  carListQuery: null,
  totalPages: 1,
  isLoading: false,
  errorMessage: null,
  car: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.errorMessage = null;
  state.car = null;
};

const handleRejected = (state, { payload }) => {
  state.errorMessage = payload;
  state.isLoading = false;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFavoriteCar: (state, { payload }) => {
      const carId = payload;
      if (state.favoriteCars.includes(carId)) {
        state.favoriteCars = state.favoriteCars.filter((id) => id !== carId);
      } else {
        state.favoriteCars.push(carId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsList.pending, handlePending)
      .addCase(getCarsList.rejected, handleRejected)
      .addCase(getCarsList.fulfilled, (state, { payload }) => {
        state.carListQuery = payload.query;
        state.totalPages = payload.obj.totalPages;
        state.isLoading = false;

        if (payload.query.page === 1) {
          state.carsList = payload.obj.cars;
        } else {
          const uniqueCars = payload.obj.cars.filter(
            (newCar) => !state.carsList.some((car) => car.id === newCar.id)
          );
          state.carsList = [...state.carsList, ...uniqueCars];
        }

        if (state.favoriteCars.length > 0) {
          state.carsList = state.carsList.filter((car) =>
            state.favoriteCars.includes(car.id)
          );
        }
      })
      .addCase(getCarById.pending, handlePending)
      .addCase(getCarById.rejected, handleRejected)
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.car = payload;
        state.isLoading = false;
      });
  },
});

export const { setFavoriteCar } = carsSlice.actions;
export default carsSlice.reducer;

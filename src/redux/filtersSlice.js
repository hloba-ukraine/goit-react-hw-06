import { createSlice } from "@reduxjs/toolkit";
const INITAL_STATE = {
  name: "",
};
const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: INITAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
// Редюсер слайсу
export const filterReducer = filtersSlice.reducer;

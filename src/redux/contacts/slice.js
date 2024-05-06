import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const INITAL_STATE = {
  items: [],
  loading: false,
  error: null,
  isModalOpen: false,
  deleteId: "",
};
const contactsSlice = createSlice({
  name: "contacts",

  initialState: INITAL_STATE,
  reducers: {
    isModalOpen(state) {
      state.isModalOpen = true;
    },
    isModalClose(state) {
      state.isModalOpen = false;
    },
    deleteId(state, action) {
      state.deleteId = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected),
});
export const { isModalOpen, isModalClose, deleteId } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

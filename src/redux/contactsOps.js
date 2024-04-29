import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (thunkApi) => {
    try {
      const data = await axios.get(
        "https://662dc208a7dda1fa378b39ae.mockapi.io/contacts"
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (finalConacts, thunkApi) => {
    try {
      const data = await axios.post(
        `https://662dc208a7dda1fa378b39ae.mockapi.io/contacts`,
        { ...finalConacts }
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://662dc208a7dda1fa378b39ae.mockapi.io/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6542095af0b8287df1ff5f9e.mockapi.io";

export const fetchCars = createAsyncThunk(
   "cars/fetchAll",
   async (_, {rejectWithValue}) => {
     try {
       const response = await axios.get("/Adverts");
       return response.data;
     } catch (e) {
       return rejectWithValue(e.message);
     }
   }
 );


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
   "cars/fetchAll",
   async (page , {rejectWithValue}) => {
     try {
      const url = new URL('https://6542095af0b8287df1ff5f9e.mockapi.io/Adverts');
      url.searchParams.append('p', page);
      url.searchParams.append('l', 12); 
       const response = await axios.get(url);
       return response.data;
     } catch (e) {
       return rejectWithValue(e.message);
     }
   }
 );


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  "users/post",
  ({ values, url }) => axios.post(`http://${url}`, { values }).then(
    response => ({ response, values })).catch(e => ({ e, values }))
);
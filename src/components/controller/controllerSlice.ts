import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Config } from '../config/dev.env';

export interface ControllerState {
  loading: boolean;
  successData: { insertedId: string };
  error: any;
}

const initialState: ControllerState = {
  loading: false,
  successData: { insertedId: '' },
  error: null,
};

export const postData: any = createAsyncThunk('postData', async (data) => {
  const headerParams = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Request-Headers': '*',
      'api-key': Config.KEY,
    },
  };
  const postingData = {
    collection: Config.COLLECTION,
    database: Config.DATABASE,
    dataSource: Config.DATA_SOURCE,
    document: data,
  };
  return axios.post(`${Config.URL}/insertOne`, postingData, headerParams);
});

// Then, handle actions in your reducers:
export const controllerSlice = createSlice({
  name: 'controller',
  initialState,
  reducers: {
    reset: (state) => {
      state.successData = initialState.successData;
    },
  },
  extraReducers: (builder) => {
    // Do something while pending if you want.
    builder.addCase(postData.pending, (state, action) => {
      state.loading = true;
    });
    // Do something when passes.
    builder.addCase(postData.fulfilled, (state, action) => {
      state.loading = false;
      state.successData = action.payload.data;
    });
    // Do something if fails.
    builder.addCase(postData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { reset } = controllerSlice.actions;

export default controllerSlice.reducer;

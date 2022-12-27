import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Config } from '../config/dev.env';

export interface ExecutionState {
  loading: boolean;
  clusterSuccessData: { job_id: string };
  error: any;
}

const initialState: ExecutionState = {
  loading: false,
  clusterSuccessData: { job_id: '' },
  error: null,
};

export const postClusterData: any = createAsyncThunk(
  'postClusterData',
  async (data: any) => {
    const headerParams = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        Authorization: `Bearer ${Config.CLUSTER_TOKEN}`,
      },
    };

    const postingData = {
      name: data.jobName,
      notebook_task: {
        notebook_path: data.notebookTaskValue,
      },
      new_cluster: {
        spark_version: '7.3.x-scala2.12',
        node_type_id: 'Standard_D3_v2',
        num_workers: 10,
      },
    };

    const updateData = {
      name: data.jobName,
      notebook_task: {
        notebook_path: data.notebookTaskValue,
      },
      existing_cluster_id: data?.clusterId,
    };

    if (data?.clusterId) {
      return axios.post(
        `${Config.CLUSTER_URL}/jobs/create`,
        updateData,
        headerParams
      );
    } else {
      return axios.post(
        `${Config.CLUSTER_URL}/jobs/create`,
        postingData,
        headerParams
      );
    }
  }
);

// Then, handle actions in your reducers:
export const executionSlice = createSlice({
  name: 'controller',
  initialState,
  reducers: {
    reset: (state) => {
      state.clusterSuccessData = initialState.clusterSuccessData;
    },
  },
  extraReducers: (builder) => {
    // Do something while pending if you want.
    builder.addCase(postClusterData.pending, (state, action) => {
      state.loading = true;
    });
    // Do something when passes.
    builder.addCase(postClusterData.fulfilled, (state, action) => {
      state.loading = false;
      state.clusterSuccessData = action.payload.data;
    });
    // Do something if fails.
    builder.addCase(postClusterData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { reset } = executionSlice.actions;

export default executionSlice.reducer;

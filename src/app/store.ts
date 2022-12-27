import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import controllerReducer from '../components/controller/controllerSlice';
import executionReducer from '../components/execution/executionSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    controller: controllerReducer,
    execution: executionReducer,
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

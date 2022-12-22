import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import controllerReducer from '../components/controller/controllerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    controller: controllerReducer,
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

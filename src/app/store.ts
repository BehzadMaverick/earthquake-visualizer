import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import mapReducer from 'map/state/mapSlice';
import menuReducer from 'menu/state/menuSlice';
import earthquakeFeedReducer from 'menu/state/earthquakeFeedSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
    menu: menuReducer,
    earthquakeFeed: earthquakeFeedReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

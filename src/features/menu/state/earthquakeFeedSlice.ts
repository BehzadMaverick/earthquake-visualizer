import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EarthquakeFeedState {
  liveFeedURL: string,
  streamRate: number
}

const initialState: EarthquakeFeedState = {
  liveFeedURL: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",
  streamRate: 5,
};

export const earthquakeFeedSlice = createSlice({
  name: 'earthquakeFeed',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setEarthquakeFeedData: (state, { payload }: PayloadAction<EarthquakeFeedState>) => {
      state.liveFeedURL = payload.liveFeedURL;
      state.streamRate = payload.streamRate;
    },
  },
});

export const { setEarthquakeFeedData } = earthquakeFeedSlice.actions;
export default earthquakeFeedSlice.reducer;

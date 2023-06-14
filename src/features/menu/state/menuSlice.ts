import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
  layersPanelOpen: boolean,
  earthquakePanelOpen: boolean
}

const initialState: MenuState = {
  layersPanelOpen: false,
  earthquakePanelOpen: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLayersPanelOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.layersPanelOpen = payload;
    },
    setEarthquakePanelOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.earthquakePanelOpen = payload;
    }
  },
});

export const { setLayersPanelOpen, setEarthquakePanelOpen } = menuSlice.actions;
export default menuSlice.reducer;

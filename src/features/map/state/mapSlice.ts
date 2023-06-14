import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayerInfo } from 'map/models/LayerInfo';

export interface MapState {
  layers: { [layerName: string]: LayerInfo };
}

const initialState: MapState = {
  layers: {},
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLayers: (state, { payload }: PayloadAction<LayerInfo[]>) => {
      payload.forEach((layerInfo) => {
        state.layers[layerInfo.name] = layerInfo;
      });
    },
    setLayer: (state, { payload }: PayloadAction<LayerInfo>) => {
      state.layers[payload.name] = payload;
    },
  },
});

export const { setLayers, setLayer } = mapSlice.actions;
export default mapSlice.reducer;

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export const getLayerInfos = createSelector(
  (state: RootState) => state.map.layers,
  (layers) => Object.values(layers)
);

export const isLayerVisible = createSelector(
  (state: RootState) => state.map.layers,
  (state: RootState, name: string) => name,
  (layers, name) => {
    return layers[name]?.visible || false;
  }
);

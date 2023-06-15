import { RootState } from 'app/store';

/**
 *
 * @param state
 */
export const isLayersPanelOpen = (state: RootState) => state.menu.layersPanelOpen;
export const isEarthquakePanelOpen = (state: RootState) => state.menu.earthquakePanelOpen;
export const getEarthquakeFeedData = (state: RootState) => state.earthquakeFeed;

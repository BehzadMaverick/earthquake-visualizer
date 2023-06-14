import { AppThunk } from 'app/store';
import { setLayersPanelOpen, setEarthquakePanelOpen } from 'menu/state/menuSlice';
import { isLayersPanelOpen, isEarthquakePanelOpen } from 'menu/state/selectors';

export const toggleLayersPanel = (): AppThunk => (dispatch, getState) => {
  const currentValue = isLayersPanelOpen(getState());
  dispatch(setLayersPanelOpen(!currentValue));
};

export const toggleEarthquakePanel = (): AppThunk => (dispatch, getState) => {
  const currentValue = isEarthquakePanelOpen(getState());
  dispatch(setEarthquakePanelOpen(!currentValue));
};

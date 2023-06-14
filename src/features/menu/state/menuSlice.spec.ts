import menuReducer, { MenuState, setLayersPanelOpen } from './menuSlice';

describe('counter reducer', () => {
  const initialState: MenuState = {
    layersPanelOpen: false,
    earthquakePanelOpen: false,
  };
  it('should handle initial state', () => {
    expect(menuReducer(undefined, { type: 'unknown' })).toEqual({
      layersPanelOpen: false,
    });
  });

  it('should set layers panel open', () => {
    const actual = menuReducer(initialState, setLayersPanelOpen(true));
    expect(actual.layersPanelOpen).toBeTruthy();
  });
});

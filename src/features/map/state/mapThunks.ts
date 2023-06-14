import { AppDispatch } from 'app/store';
import { LayerInfo } from 'map/models/LayerInfo';
import { setLayers } from 'map/state/mapSlice';
import { Map } from 'ol';

export const updateLayers = (map: Map) => (dispatch: AppDispatch) => {
  const layers: LayerInfo[] = [];
  map.getLayers().forEach((layer, index) => {
    let name = layer.get('name');
    if (!name) {
      name = `Layer${index}`;
      layer.set('name', name);
    }
    layers.push({
      name,
      visible: layer.getVisible(),
    });
  });
  dispatch(setLayers(layers));
};

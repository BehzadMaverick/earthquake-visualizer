import TileLayer from 'ol/layer/Tile';
import { TileWMS } from 'ol/source';

export const DefaultWmsLayer = new TileLayer({
  source: new TileWMS({
    url: 'https://ahocevar.com/geoserver/wms',
    params: {
      LAYERS: 'ne:NE1_HR_LC_SR_W_DR',
      TILED: true,
    },
  }),
});

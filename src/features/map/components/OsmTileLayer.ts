import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

export const OsmTileLayer = new TileLayer({
  source: new OSM(),
  properties: {
    name: 'Open Street Maps Layer',
  },
});

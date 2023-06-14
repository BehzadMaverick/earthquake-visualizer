import Map from 'map/components/Map';
import MapContext from 'map/context/MapContext';
import Menu from 'menu/components/Menu';
import { Map as OLMap } from 'ol';
import LayersPanel from 'overlays/components/layers-panel/LayersPanel';
import EarthquakePanel from 'overlays/components/earthquake-panel/EarthquakeForm';
import React, { useState } from 'react';
import '../node_modules/ol/ol.css';
import './App.css';

/**
 * Container for the CTI Code Exercise App.
 */
function App() {
  const [map, setMap] = useState<OLMap | undefined>(undefined);

  return (
    <MapContext.Provider value={map}>
      <Menu />
      <Map map={map!} setMap={setMap} />
      <LayersPanel />
      <EarthquakePanel />
    </MapContext.Provider>
  );
}

export default App;

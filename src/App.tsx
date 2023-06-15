import Map from 'map/components/Map';
import MapContext from 'map/context/MapContext';
import Menu from 'menu/components/Menu';
import { Map as OLMap } from 'ol';
import LayersPanel from 'overlays/components/layers-panel/LayersPanel';
import EarthquakePanel from 'overlays/components/earthquake-panel/EarthquakeForm';
import React, { useState, useEffect } from 'react';
import { useAppSelector } from 'app/hooks';
import { getEarthquakeFeedData } from 'menu/state/selectors';
import '../node_modules/ol/ol.css';
import './App.css';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import { Geometry } from 'ol/geom';

/**
 * Container for the CTI Code Exercise App.
 */
function App() {
  const [map, setMap] = useState<OLMap | undefined>(undefined);
  const [previousLayer, setPreviousLayer] = useState<VectorLayer<VectorSource<Geometry>> | null>(null);
  const { liveFeedURL, streamRate } = useAppSelector(getEarthquakeFeedData);

  useEffect(() => {
    const fetchData = setInterval(() => {
      const vectorSource = new VectorSource({
        format: new GeoJSON(),
        url: liveFeedURL,
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
      setPreviousLayer(vectorLayer);
      if (previousLayer) map?.removeLayer(previousLayer);
      map?.addLayer(vectorLayer);
    }, streamRate * 1000);
    return () => clearInterval(fetchData);
  }, [map, liveFeedURL, streamRate, previousLayer]);

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

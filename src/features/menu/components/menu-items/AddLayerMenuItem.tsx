import { useRef, useContext } from 'react';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import { NavDropdown } from 'react-bootstrap';
import GeoJSON from 'ol/format/GeoJSON';

import MapContext from 'map/context/MapContext';

const AddLayerMenuItem = () => {
  const map = useContext(MapContext);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        try {
          const jsonData = JSON.parse(content);
          const vectorSource = new VectorSource({
            features: new GeoJSON().readFeatures(jsonData),
          });
          const vectorLayer = new VectorLayer({
            source: vectorSource,
          });
          map?.addLayer(vectorLayer);
        } catch (error) {
          console.error('Invalid JSON file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <NavDropdown.Item onClick={handleClick}>Add Layer...</NavDropdown.Item>{' '}
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleInputChange} />
    </>
  );
};

export default AddLayerMenuItem;

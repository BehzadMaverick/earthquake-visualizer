import { Map } from 'ol';
import { createContext } from 'react';

const MapContext = createContext<Map | undefined>(undefined);

/**
 * The OpenLayers map context provides a reference to the active map instance.
 */
export default MapContext;

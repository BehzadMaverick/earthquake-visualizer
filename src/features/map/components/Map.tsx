import { useAppDispatch } from 'app/hooks';
import { DefaultView } from 'map/components/DefaultView';
import { DefaultWmsLayer } from 'map/components/DefaultWmsLayer';
import { OsmTileLayer } from 'map/components/OsmTileLayer';
import StyledMap from 'map/components/StyledMap';
import { updateLayers } from 'map/state/mapThunks';
import { Map as OLMap } from 'ol';
import React, { ReactNode, useEffect, useRef } from 'react';

interface MapProps {
  children?: ReactNode;
  map: OLMap;
  setMap(map: OLMap): void;
}

/**
 * OpenLayers map component which fills the entire available window.
 */
const Map = ({ children, map, setMap }: MapProps) => {
  const dispatch = useAppDispatch();
  const mapRef = useRef<HTMLDivElement>(null);

  /**
   * Initializes the OpenLayers map object once the component is mounted and the element ref is available.
   */
  useEffect(() => {
    let mapObject: OLMap;

    if (!map) {
      mapObject = new OLMap({
        // @ts-ignore ol.Map.target allows undefined but not null, but the ref object allows null but not undefined ¯\_(ツ)_/¯
        target: mapRef.current,
        layers: [DefaultWmsLayer],
        view: DefaultView,
      });
      dispatch(updateLayers(mapObject));

      mapObject.getLayers().on('change:length', () => {
        dispatch(updateLayers(mapObject));
      });

      setMap(mapObject);
    }

    return () => {
      if (mapObject) {
        mapObject.setTarget();
      }
    };
  }, []);

  return <StyledMap ref={mapRef}>{children}</StyledMap>;
};

export default Map;

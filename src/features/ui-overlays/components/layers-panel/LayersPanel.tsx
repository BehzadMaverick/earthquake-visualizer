import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getLayerInfos } from 'map/state/selectors';
import { setLayersPanelOpen } from 'menu/state/menuSlice';
import { isLayersPanelOpen } from 'menu/state/selectors';
import LayerListItem from 'overlays/components/layers-panel/LayerListItem';
import { useMemo } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import StyledLayersPanel from './StyledLayersPanel';

const LayersPanel = () => {
  const dispatch = useAppDispatch();
  const layers = useAppSelector(getLayerInfos);

  const layerElements = useMemo<JSX.Element[]>(() => layers.map((layer) => <LayerListItem layer={layer} key={`${layer.name}`} />), [layers]);

  const isOpen = useAppSelector(isLayersPanelOpen);
  const visibility = useMemo(() => (isOpen ? 'visible' : 'hidden'), [isOpen]);

  const handleClose = () => {
    dispatch(setLayersPanelOpen(false));
  };

  return (
    <StyledLayersPanel style={{ visibility }} className={'layers-panel'}>
      <Card.Header as={'h5'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Layer List</div>
        <IoClose onClick={handleClose} />
      </Card.Header>
      <Card.Body>
        <ListGroup variant={'flush'}>{layerElements}</ListGroup>
      </Card.Body>
    </StyledLayersPanel>
  );
};

export default LayersPanel;

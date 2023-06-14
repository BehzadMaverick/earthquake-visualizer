import { useAppDispatch } from 'app/hooks';
import MapContext from 'map/context/MapContext';
import { LayerInfo } from 'map/models/LayerInfo';
import { setLayer } from 'map/state/mapSlice';
import { ChangeEvent, useContext } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

interface LayerListItemProps {
  layer: LayerInfo;
}
const LayerListItem = ({ layer }: LayerListItemProps) => {
  const { name, visible } = layer;
  const dispatch = useAppDispatch();
  const map = useContext(MapContext);

  const changeVisibility = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    map?.getLayers().forEach((layer) => {
      if (layer.get('name') === name) {
        layer.setVisible(checked);
      }
    });
    dispatch(setLayer({ name, visible: checked }));
  };

  return (
    <ListGroup.Item
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Form.Check type={'switch'} onChange={changeVisibility} checked={visible} />
      {name}
    </ListGroup.Item>
  );
};

export default LayerListItem;

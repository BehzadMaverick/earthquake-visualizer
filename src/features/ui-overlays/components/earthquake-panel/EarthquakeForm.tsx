import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setEarthquakePanelOpen } from 'menu/state/menuSlice';
import { isEarthquakePanelOpen } from 'menu/state/selectors';
import { Card, Form, Button } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import StyledEarthquakePanel from './StyledEarthquakePanel';
import React, { useMemo } from 'react';

const EarthquakePanel = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(isEarthquakePanelOpen);
  const visibility = useMemo(() => (isOpen ? 'visible' : 'hidden'), [isOpen]);

  const handleClose = () => {
    dispatch(setEarthquakePanelOpen(false));
  };

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <StyledEarthquakePanel style={{ visibility }}>
      <Card.Header as={'h5'} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Earthquake Feed</div>
        <IoClose onClick={handleClose} />
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" onSubmit={handleSubmit}>
            <Form.Label>Live Feed URL</Form.Label>
            <Form.Control type="text" placeholder="/url/to/live/feed/json" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Live Stream Rate (from 1 s to 300 s)</Form.Label>
            <Form.Control type="number" placeholder="Type in seconds" />
          </Form.Group>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </StyledEarthquakePanel>
  );
};

export default EarthquakePanel;

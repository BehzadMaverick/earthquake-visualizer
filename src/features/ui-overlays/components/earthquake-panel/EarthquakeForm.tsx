import { useMemo, useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setEarthquakePanelOpen } from 'menu/state/menuSlice';
import { getEarthquakeFeedData, isEarthquakePanelOpen } from 'menu/state/selectors';
import { setEarthquakeFeedData } from 'menu/state/earthquakeFeedSlice';
import StyledEarthquakePanel from 'features/ui-overlays/components/earthquake-panel/StyledEarthquakePanel';

const EarthquakePanel = () => {
  const dispatch = useAppDispatch();
  const [liveFeedURL, setLiveFeedURL] = useState('');
  const [streamRate, setStreamRate] = useState(0);

  const isOpen = useAppSelector(isEarthquakePanelOpen);
  const { liveFeedURL: url, streamRate: rate } = useAppSelector(getEarthquakeFeedData);
  const visibility = useMemo(() => (isOpen ? 'visible' : 'hidden'), [isOpen]);

  useEffect(() => {
    setLiveFeedURL(url);
    setStreamRate(rate);
  }, [url, rate]);

  const handleClose = () => {
    dispatch(setEarthquakePanelOpen(false));
  };

  const handleSubmit = () => {
    if (streamRate < 1 || streamRate > 300) {
      alert("Stream Rate must be in range from 1-300");
    } else {
      dispatch(
        setEarthquakeFeedData({
          liveFeedURL,
          streamRate,
        })
      );
      handleClose();
    }
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
            <Form.Control
              type="text"
              placeholder="/url/to/live/feed/json"
              value={liveFeedURL}
              onChange={({ target }) => setLiveFeedURL(target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Live Stream Rate (from 1 s to 300 s)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Type in seconds"
              min="1"
              max="300"
              value={streamRate}
              onChange={({ target }) => setStreamRate(parseFloat(target.value))}
            />
          </Form.Group>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </StyledEarthquakePanel>
  );
};

export default EarthquakePanel;

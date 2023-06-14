import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledEarthquakePanel = styled(Card)`
  position: absolute;
  left: 32px;
  top: calc(56px + 10vh);
  min-width: 330px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.16), 0 4px 10px rgba(0, 0, 0, 0.23);
`;

export default StyledEarthquakePanel;

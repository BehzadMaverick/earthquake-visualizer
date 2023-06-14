import { useAppDispatch, useAppSelector } from 'app/hooks';
import { toggleEarthquakePanel } from 'menu/state/thunks';
import { NavDropdown } from 'react-bootstrap';

/**
 * Menu item that behaves as a toggle to control the visibility of the earthquake form.
 */
const LayersPanelMenuItem = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.earthquakePanelOpen);
  const toggleOpen = (): void => {
    dispatch(toggleEarthquakePanel());
  };

  return <NavDropdown.Item onClick={toggleOpen}>{isOpen ? 'Close Earthquake Panel' : 'Open Earthquake Panel'}</NavDropdown.Item>;
};

export default LayersPanelMenuItem;

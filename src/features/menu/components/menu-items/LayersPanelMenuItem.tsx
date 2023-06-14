import { useAppDispatch, useAppSelector } from 'app/hooks';
import { toggleLayersPanel } from 'menu/state/thunks';
import { NavDropdown } from 'react-bootstrap';

/**
 * Menu item that behaves as a toggle to control the visibility of the layers panel overlay.
 */
const LayersPanelMenuItem = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.layersPanelOpen);
  const toggleOpen = (): void => {
    dispatch(toggleLayersPanel());
  };

  return <NavDropdown.Item onClick={toggleOpen}>{isOpen ? 'Close Layers Panel' : 'Open Layers Panel'}</NavDropdown.Item>;
};

export default LayersPanelMenuItem;

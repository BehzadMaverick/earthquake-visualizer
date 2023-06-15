import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import AddLayerMenuItem from 'menu/components/menu-items/AddLayerMenuItem';
import LayersPanelMenuItem from 'menu/components/menu-items/LayersPanelMenuItem';
import AddLiveFeedMenuItem from 'menu/components/menu-items/AddLiveFeedMenuItem';
import StyledMenuContainer from 'menu/components/StyledMenuContainer';

const Menu = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <StyledMenuContainer>
          <Navbar.Brand>OpenLayers Networks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <LayersPanelMenuItem />
                <AddLayerMenuItem />
                <AddLiveFeedMenuItem />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </StyledMenuContainer>
      </Navbar>
    </>
  );
};

export default Menu;

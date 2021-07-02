import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/add" className="nav-link">Suma</Link>
            </NavItem>
            <NavItem>
              <Link to="/res" className="nav-link">Resta</Link>
            </NavItem>
            <NavItem>
              <Link to="/div" className="nav-link">Division</Link>
            </NavItem>
            <NavItem>
              <Link to="/mul" className="nav-link">Multiplicacion</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
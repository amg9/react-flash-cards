import React from 'react';
import { Menu, MenuItem, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Link to="/">
      <MenuItem>
        Home
      </MenuItem>
    </Link>
    <Link to="/about">
      <MenuItem>
        About
      </MenuItem>
    </Link>
    <Link to="/flash-cards">
      <MenuItem>
        Flash Cards
      </MenuItem>
    </Link>
  </Menu>
);

export default Navbar;
import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import SideMenu from '@e-group/material-module/SideMenu';
import Main from '@e-group/material-layout/Main';
import NavbarBrick from '@e-group/material-layout/NavbarBrick';
import Navbar from 'components/Navbar';

const Root = ({ location, route }) => {
  return (
    <React.Fragment>
      <Navbar location={location} />
      <NavbarBrick />
      <SideMenu location={location} routes={route.routes} />
      <Main>{renderRoutes(route.routes)}</Main>
    </React.Fragment>
  );
};

Root.propTypes = {
  route: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Root;

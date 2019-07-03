import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useHandleIsOpen from '@e-group/hooks/useHandleIsOpen';
import useScrollShowShadow from '@e-group/hooks/useScrollShowShadow';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MobileMenu from '@e-group/material-module/MobileMenu';

import MenuIcon from '@material-ui/icons/Menu';

import routes from 'routes';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff'
  },
  logo: {
    maxHeight: 40,
    marginLeft: theme.spacing(2)
  },
  logo2: {
    maxHeight: 30
  }
}));

const Navbar = ({ location }) => {
  const { isOpen, handleOpen, handleClose } = useHandleIsOpen(false);
  const isShowShadow = useScrollShowShadow(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer open={isOpen} onClose={handleClose}>
        <MobileMenu
          routes={routes[0].routes}
          location={location}
          MuiListItmProps={{
            onClick: handleClose
          }}
        />
      </Drawer>
      <AppBar elevation={isShowShadow ? 4 : 0} className={classes.root}>
        <Toolbar>
          <IconButton onClick={handleOpen} edge="start" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  location: PropTypes.object.isRequired
};

export default Navbar;

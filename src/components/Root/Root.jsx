import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%',
    zIndex: 1,
    position: 'relative'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  main: {
    paddingTop: theme.spacing.unit * 12
  }
});

const Root = ({ classes, route }) => {
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} className={classes.main}>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/page1">page1</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
          </ul>
        </nav>
        {renderRoutes(route.routes)}
      </Container>
    </div>
  );
};

Root.propTypes = {
  // JSS props
  classes: PropTypes.object.isRequired,
  // react router dom props
  route: PropTypes.object.isRequired
};

export default withStyles(styles)(Root);

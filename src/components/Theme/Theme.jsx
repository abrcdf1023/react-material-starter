import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { createMuiTheme } from '@material-ui/core/styles';
import EgTheme from '@e-group/material/Theme';

const Theme = ({ themeOptions, dispatch, ...others }) => (
  <EgTheme theme={createMuiTheme(themeOptions.toJS())} {...others} />
);

Theme.propTypes = {
  themeOptions: ImmutablePropTypes.map.isRequired
};

export default Theme;

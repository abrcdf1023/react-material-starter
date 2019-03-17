import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import theme from './theme';
import routes from './routes';

import Theme from '@e-group/react-material-components/dist/Theme';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Theme theme={theme}>{renderRoutes(routes)}</Theme>
      </BrowserRouter>
    );
  }
}

export default App;

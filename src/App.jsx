import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import Theme from '@e-group/react-material-components/dist/Theme';

import { store, history } from 'redux/configureStore';
import theme from './theme';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Theme theme={theme}>{renderRoutes(routes)}</Theme>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

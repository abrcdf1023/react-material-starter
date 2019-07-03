import React, { Component } from 'react';

import { store, history } from 'redux/configureStore';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import Theme from 'redux/modules/components/Theme';
import { CookiesProvider } from 'react-cookie';
import AlertDialog from 'redux/modules/components/AlertDialog';
import RouterRoot from 'components/RouterRoot';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Theme>
            <CookiesProvider>
              <AlertDialog />
              <RouterRoot />
            </CookiesProvider>
          </Theme>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

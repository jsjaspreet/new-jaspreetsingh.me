import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import Relay from 'react-relay'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from "./store"
import App from './views';

class HomeRoute extends Relay.Route {
  static routeName = 'Home'
  static queries = {
    store: (Component) => Relay.QL`
                query MainQuery {
                 store { ${Component.getFragment('store')} }
                 }
               `
  }
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Relay.RootContainer
        Component={App}
        route={new HomeRoute()}
      />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'))



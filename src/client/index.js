import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import Relay from 'react-relay'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from "./store"
import App from './views';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'))



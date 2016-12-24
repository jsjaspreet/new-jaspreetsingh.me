import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from "./store"
import Root from './views/Root';


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Root />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', render);
}

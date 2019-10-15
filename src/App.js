import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';
import store from './store/index';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;

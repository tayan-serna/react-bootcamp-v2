import React from 'react';
import { Provider } from 'react-redux';

import Main from './Components/Main';
import store from './store';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <Main />;
  </Provider>
);

export default App;

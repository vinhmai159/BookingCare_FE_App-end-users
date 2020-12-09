import React from 'react';

import Index from './src/Components/Index';
import store from './src/redux/redux';
import {Provider} from 'react-redux';
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;



import React from 'react';
import { Text } from 'react-native'
import rootReducer from './src/redux/reducer/index';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from "redux";
import Home from './src/views/Home'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;

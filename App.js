

import React, { useEffect } from 'react';
import { Text } from 'react-native'
import { createStore } from 'redux'
import reducer from './src/redux/reducer/index'

const store = createStore(reducer)
console.log('Initial redux state', store.getState())

const App = () => {
  return (
    <>
      <Text>Welcome react</Text>
    </>
  );
};

export default App;

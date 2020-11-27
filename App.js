import React from 'react';
import rootReducer from './src/redux/reducer/index';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from "redux";
import Home from './src/views/Home';
import Login from './src/views/Login';
import { Router, Scene, Stack } from 'react-native-router-flux';


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} initial={true} hideNavBar/>
          <Scene key="home" component={Home} hideNavBar />
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;


import React, { useEffect } from 'react';
import { Navigation } from 'react-native-navigation'
import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer)
console.log('Initial redux state', store.getState())


const App = () => {
  useEffect(() => {
    // Navigation.setRoot({
    //   root: {
    //     bottomTabs: {
    //       children: [
    //         {
    //           component: {
    //             name: 'Settings',
    //             options: {
    //               bottomTab: {
    //                 text: 'Settings',
    //                 // icon: require('../images/home.png')
    //               }
    //             }
    //           }
    //         },
    //       ],
    //       options: {} 
    //     }
    //   }
    // });
  }, [])
  
  return (
    <>
      Terminal
    </>
  );
};

export default App;

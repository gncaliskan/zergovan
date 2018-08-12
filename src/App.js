import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';
import GirisYap from './components/GirisYap';


class App extends Component {
  componentWillMount() {
  firebase.initializeApp({
      apiKey: 'AIzaSyAvCD-VHr6r12EZf3zgeT9JDd-QaECQUOo',
      authDomain: 'zergovan-f8885.firebaseapp.com',
      databaseURL: 'https://zergovan-f8885.firebaseio.com',
      projectId: 'zergovan-f8885',
      storageBucket: 'zergovan-f8885.appspot.com',
      messagingSenderId: '101365403662'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Giriş Yap" />
          <GirisYap />
        </View>
    </Provider>
    );
  }
}

export default App;

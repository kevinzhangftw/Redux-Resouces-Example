import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import MainScreen from './components/MainScreen'

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>

    );
  }
}
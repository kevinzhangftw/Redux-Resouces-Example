import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import MainScreenContainer from './MainScreen/MainScreenContainer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreenContainer />
      </Provider>
    );
  }
}

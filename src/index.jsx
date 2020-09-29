// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

const initialState = {
  messages: [],
  channels: ['general', 'cool react stuff', 'berlin my love'],
  selectedChannel: 'general',
  currentUser: prompt("Hey awesome, what's your name?")
};

// State and reducers
const identityReducer = (state = null) => state;

const reducers = combineReducers({
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  channels: identityReducer,
  currentUser: identityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import { createStore, applyMiddleware } from 'redux';
import socialDataReducer from './social-data/socialDataReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  socialDataReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

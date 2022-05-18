import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducres';
import { AppState } from './states';
export * from './actions';
export * from './states';
export const store = legacy_createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

export interface StoreState {
  app: AppState;
}

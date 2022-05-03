import { legacy_createStore, combineReducers } from 'redux';
import reducers from './reducres';
import { AppState } from './states';
export * from './actions';
export * from './states';
export const store = legacy_createStore(combineReducers(reducers));

export interface StoreState {
  app: AppState;
}

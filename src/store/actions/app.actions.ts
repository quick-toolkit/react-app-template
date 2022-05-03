import { Action } from 'redux';
import { LocaleLanguageKey } from '@quick-toolkit/http';
import { AppActionTypes } from './app.action.types';

export interface ActionUpdateLanguage
  extends Action<AppActionTypes.UPDATE_LANGUAGE> {
  payload?: LocaleLanguageKey;
}

export interface ActionUpdateTheme extends Action<AppActionTypes.UPDATE_THEME> {
  payload?: 'dark' | 'light';
}

export type AppActions = ActionUpdateLanguage | ActionUpdateTheme;

import { APP_STATE, AppState } from '../states';
import { AppActions, AppActionTypes } from '../actions';

export function appReducer(state: AppState = APP_STATE, action: AppActions) {
  switch (action.type) {
    case AppActionTypes.UPDATE_LANGUAGE:
      const language = action.payload || 'zh_CN';
      localStorage.setItem('language', language);
      return {
        ...state,
        language,
      };

    case AppActionTypes.UPDATE_THEME:
      const theme = action.payload || 'dark';
      localStorage.setItem('theme', theme);
      return {
        ...state,
        theme,
      };
    default:
      return { ...state };
  }
}

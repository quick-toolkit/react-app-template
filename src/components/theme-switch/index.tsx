import { Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ActionUpdateTheme, AppActionTypes, StoreState } from 'src/store';
import { Dispatch } from 'redux';

export function ThemeSwitch() {
  const theme = useSelector<StoreState, 'light' | 'dark'>(
    (state) => state.app.theme
  );
  const dispatch = useDispatch<Dispatch<ActionUpdateTheme>>();
  return (
    <Switch
      checked={theme === 'light'}
      checkedChildren="Light"
      unCheckedChildren="Dark"
      onChange={(checked) =>
        dispatch({
          type: AppActionTypes.UPDATE_THEME,
          payload: checked ? 'light' : 'dark',
        })
      }
    />
  );
}

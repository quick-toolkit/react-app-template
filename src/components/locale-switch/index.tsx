import { GlobalOutlined } from '@ant-design/icons';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Button, Dropdown, Menu } from 'antd';
import { usePlusLocale } from '@quick-toolkit/ant-design-plus';
import { LANGUAGES, SUPPORT_LANGUAGES } from 'src/constants';
import { ActionUpdateLanguage, AppActionTypes } from 'src/store';

export function LocaleSwitch() {
  const locale = usePlusLocale();
  const dispatch = useDispatch<Dispatch<ActionUpdateLanguage>>();
  return (
    <Dropdown
      trigger={['click']}
      overlay={
        <Menu selectedKeys={[locale.language]}>
          {SUPPORT_LANGUAGES.map((o) => (
            <Menu.Item
              key={o}
              onClick={() =>
                dispatch({
                  type: AppActionTypes.UPDATE_LANGUAGE,
                  payload: o,
                })
              }
            >
              {LANGUAGES[o].flag} {LANGUAGES[o].label}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <Button icon={<GlobalOutlined />} />
    </Dropdown>
  );
}

import { Button, Card, Input, Layout, notification } from 'antd';
import { PlusForm } from '@quick-toolkit/ant-design-plus';
import { useRouteLocale } from '@quick-toolkit/rc-router-dom';
import { UserSignDto } from './dtos';
import { SIGNPageLocale } from './locales/locale';

import './styles/index.less';
import { LocaleSwitch } from 'src/components';
import { useState } from 'react';

const { Item } = PlusForm;

export default () => {
  const locale = useRouteLocale<SIGNPageLocale>();
  const [fetching, setFetching] = useState<boolean>();
  return (
    <Layout className="sign_html">
      <Card
        size="small"
        className="login"
        title={locale.TITLE}
        extra={<LocaleSwitch />}
      >
        <PlusForm
          model={UserSignDto}
          layout="vertical"
          onBeforeRequest={() => setFetching(true)}
          onSuccess={() => {
            notification.success({
              message: 'ok',
              description: 'ok',
            });
            setFetching(false);
          }}
          onFail={() => setFetching(false)}
        >
          <Item name="username">
            <Input />
          </Item>

          <Item name="password">
            <Input type="password" />
          </Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            children={locale.SIGN}
            loading={fetching}
          />
        </PlusForm>
      </Card>
    </Layout>
  );
};

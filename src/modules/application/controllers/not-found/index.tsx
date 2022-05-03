import { Button, Layout, Result, Row, Space } from 'antd';
import { LocaleSwitch, ThemeSwitch } from 'src/components';
import { useRouteLocale } from '@quick-toolkit/rc-router-dom';
import { NotFoundPageLocale } from './locales/locale';

import './styles/index.less';

export default () => {
  const locale = useRouteLocale<NotFoundPageLocale>();
  return (
    <Layout className="not_found_html">
      <Row justify="end" className="header">
        <Space>
          <ThemeSwitch />
          <LocaleSwitch />
        </Space>
      </Row>
      <Result
        status={404}
        title={locale.TITLE}
        subTitle={locale.SUB_TITLE}
        extra={
          <Button
            type="primary"
            children={locale.GO_BACK}
            onClick={() => window.history.back()}
          />
        }
      />
    </Layout>
  );
};

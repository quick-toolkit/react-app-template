import { Outlet } from 'react-router-dom';
import { PlusProvider } from '@quick-toolkit/ant-design-plus';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import en_US from 'antd/lib/locale/en_US';
import zh_CN from 'antd/lib/locale/zh_CN';

import * as locales from 'src/locales';
import { http, transformer } from 'src/utils';
import { AppState, StoreState } from 'src/store';
import { FullSpinning } from 'src/components';

const antLocales = {
  zh_CN,
  en_US,
};

export default () => {
  const { language, theme } = useSelector<StoreState, AppState>(
    (state) => state.app
  );
  return (
    <PlusProvider
      theme={theme}
      antProviderProps={{
        prefixCls: theme === 'dark' ? 'ant-dark' : 'ant',
      }}
      antLocale={antLocales[language]}
      locale={locales[language]}
      http={http}
      transformer={transformer}
    >
      <Suspense fallback={<FullSpinning />}>
        <Outlet />
      </Suspense>
    </PlusProvider>
  );
};

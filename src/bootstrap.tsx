import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from './store';
import { FullSpinning } from './components';
import { AppState } from './store';
import modules from './modules';
import './index.less';

export function Bootstrap() {
  const { language } = useSelector<StoreState, AppState>((state) => state.app);
  return (
    <div className="app">
      <Suspense fallback={<FullSpinning />}>
        {modules.toElement(language)}
      </Suspense>
    </div>
  );
}

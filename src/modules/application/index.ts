import { RCModule } from '@quick-toolkit/rc-router-dom';
import { lazy } from 'react';

export const Application = RCModule.create({
  path: '',
  name: 'APPLICATION',
  title: 'Application',
  controller: lazy(() => import('./layout')),
  children: [
    {
      path: 'sign.html',
      name: 'SIGN',
      title: 'Sign',
      locales: require('./controllers/sign/locales'),
      controller: lazy(() => import('./controllers/sign')),
    },
    {
      path: 'index.html',
      name: 'INDEX',
      title: 'Index',
      controller: lazy(() => import('./controllers/index')),
    },
    {
      path: '*',
      name: 'NOT_FOUND',
      title: 'Not found',
      locales: require('./controllers/not-found/locales'),
      controller: lazy(() => import('./controllers/not-found')),
    },
  ],
});

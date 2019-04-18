import Root from 'components/Root';

import Home from 'redux/modules/components/Home';
import Page1 from 'components/Page1';
import Page2 from 'components/Page2';
import NoFound from 'components/NoFound';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/page1',
        component: Page1
      },
      {
        path: '/page2',
        component: Page2
      },
      {
        path: '*',
        component: NoFound
      }
    ]
  }
];

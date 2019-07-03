import React from 'react';
import Root from 'components/Root';
import Home from 'redux/modules/components/Home';
import Page1 from 'redux/modules/components/Page1';
import Page2 from 'redux/modules/components/Page2';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        breadcrumbName: 'Home',
        icon: <DashboardIcon />,
        component: Home
      },
      {
        path: '/page1',
        breadcrumbName: 'Page1',
        icon: <PeopleIcon />,
        component: Page1
      },
      {
        path: '/page2',
        breadcrumbName: 'Page2',
        icon: <BusinessIcon />,
        component: Page2
      }
    ]
  }
];

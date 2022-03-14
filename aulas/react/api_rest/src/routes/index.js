import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login}></MyRoute>
      <MyRoute exact path="*" component={Page404}></MyRoute>
    </Switch>
  );
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SingUp from '../pages/SingUp';
import Search from '../pages/Search';
import Registration from '../pages/Registration';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/singup" component={SingUp} />
    <Route path="/search" component={Search} />
    <Route path="/registration" component={Registration} />
  </Switch>
);

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import SingUp from '../pages/SingUp';
import Search from '../pages/Search';
import Registration from '../pages/Registration';
import Informations from '../pages/Informations';
import AdmMenu from '../pages/AdmMenu';
import Documentation from '../pages/Documentation';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/sing-up" component={SingUp} />
    <Route path="/search" component={Search} />
    <Route path="/registration" component={Registration} />
    <Route path="/information" component={Informations} />
    <Route path="/adm-menu" component={AdmMenu} />
    <Route path="/documentation" component={Documentation} />
  </Switch>
);

export default Routes;

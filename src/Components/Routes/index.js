import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../../Pages/Login';
import Home from '../../Pages/Home';
import Register from '../../Pages/Register';
import Login2 from '../../Pages/Login2';



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/login2" component={Login2} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
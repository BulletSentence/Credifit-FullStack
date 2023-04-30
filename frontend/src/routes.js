import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

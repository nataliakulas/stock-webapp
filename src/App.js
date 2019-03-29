import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import * as route from "./shared/routes";

import DashboardPage from "./pages/dashboard";
import AddPage from "./pages/add";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={route.DASHBOARD} component={DashboardPage} />
      <Route exact path={route.ADD} component={AddPage} />
    </Switch>
  </Router>
);

export default App;

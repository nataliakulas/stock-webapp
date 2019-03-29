import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import * as route from "./shared/routes";

import DashboardPage from "./pages/dashboard";
import AddPage from "./pages/add";

import Layout from "./components/Layout";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path={route.DASHBOARD} component={DashboardPage} />
        <Route exact path={route.ADD} component={AddPage} />
      </Switch>
    </Layout>
  </Router>
);

export default App;

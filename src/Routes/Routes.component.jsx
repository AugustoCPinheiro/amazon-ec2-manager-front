import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import InstancePage from '../pages/InstancesPage.page';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/ec2">
        <InstancePage />
      </Route>
      <Route path="/s3">
        <div>s3</div>
      </Route>
    </Switch>
  </Router>
);

export default Routes;

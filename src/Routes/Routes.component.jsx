import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import InstancePage from '../pages/InstancesPage.page';
import BucketsPage from '../pages/BucketsPage.page';
import BucketObjects from '../pages/BucketObjectsPage.page'

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/ec2">
        <InstancePage />
      </Route>
      <Route path="/s3">
        <BucketsPage />
      </Route>
      <Route path="/bucket">
        <BucketObjects />
      </Route>
    </Switch>
  </Router>
);

export default Routes;

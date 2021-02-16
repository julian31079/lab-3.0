import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import MoreInfo from '../containers/MoreInfo';
import NewExperiment from '../containers/NewExperiment';
import Records from '../containers/Records';
import Report from '../containers/Report';
import RTExperiment from '../containers/RTExperiment';
import SignUp from '../containers/Sign_Up';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import '../assets/Styles/App.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/MoreInfo' component={MoreInfo} />
        <Route exact path='/NewExperiment' component={NewExperiment} />
        <Route exact path='/Records' component={Records} />
        <Route exact path='/Report' component={Report} />
        <Route exact path='/RTExperiment' component={RTExperiment} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;

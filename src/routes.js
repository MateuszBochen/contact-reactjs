import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App';
import About from './containers/About';
import NotFound from './containers/NotFound';
import Login from './containers/Login';

const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
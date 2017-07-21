import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';

import Dashboard from '../../containers/Dashboard';
import Forms from '../../containers/Forms';

import About from '../../containers/About';
import NotFound from '../../containers/NotFound';

class WorkPage extends Component {
  // static propTypes = {}
  render() {
    
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/about' component={About}/>
          <Route path='/*' component={NotFound}/>
        </Switch>
      </div>
    );
  }   
}
export default WorkPage;
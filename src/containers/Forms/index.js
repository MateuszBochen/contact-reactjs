import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';

import FormsNew from '../../containers/Forms/New';
import FormsIndex from '../../containers/Forms/Index';

class Forms extends Component {
  // static propTypes = {}

  render() {
    
    return (
      <div>
        <Switch>
          <Route exact path='/forms' component={FormsIndex}/>
          <Route path='/forms/new' component={FormsNew}/>          
        </Switch>
      </div>
    );
  }   
}
export default Forms;

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App';
//import About from './containers/About';
//import NotFound from './containers/NotFound';
import Login from './containers/Login';

const store = createStore(reducers);

const Routes = (props) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/*' component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;

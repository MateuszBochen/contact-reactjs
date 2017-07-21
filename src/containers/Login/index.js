import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm';
import './style.css';



class Login extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  onLoginFormSubmit = (loginFormState) => {
    console.log('loginFormState');
    console.log(loginFormState);    
  }

  render() {
    
    return (      
      <Grid>
        <div className="card card-container">
          <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" />
          <p id="profile-name" className="profile-name-card"></p>
          <LoginForm onSubmit={this.onLoginFormSubmit} />
        </div>
      </Grid>
    );
  }
}

export default Login;
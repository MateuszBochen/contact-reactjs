import React, { Component } from 'react';

import './style.css';

class LoginForm extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',            
    };    
  }

  onChangeLogin = (e) => {
    this.setState({
      login: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit = (e) => {
    const {onSubmit} = this.props;
    onSubmit(this.state);
    e.preventDefault();    
  }

  render() {
    
    return (
      <form className="form-signin" onSubmit={this.onSubmit} >
        <span className="reauth-email"></span>
        <input type="text" className="form-control" placeholder="Email address" required autoFocus onChange={this.onChangeLogin} value={this.state.login} />
        <input type="password" className="form-control" placeholder="Password" required onChange={this.onChangePassword} value={this.state.password} />
        <div id="remember" className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign in</button>
      </form>
    );
  }
}

export default LoginForm;

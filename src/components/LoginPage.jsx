import React, {Component, useState} from 'react';
import Logo from './styling/logo.png';
import './styling/LoginPage.css';

class LoginPage extends Component{
  handleClick = () => {
    this.props.toggle();
  };
  render(){
    return(
      <form className={`${this.toggle ? "active" : ""} All-Login`}>
        <div className="Login-Header">
          <img src={Logo} name="Logo" onClick={this.handleClick}/>
        </div>
        <div className="Login-Form">
          <input type="text" placeholder="שם משתמש" />
          <input type="password" placeholder="סיסמא" />
          <input type="submit" value="התחבר" />
        </div>
        <div className="Forgot">
          <span>שכחתי סיסמא</span>
        </div>
      </form>
    );
  }
}

export default LoginPage

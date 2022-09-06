import React, {Component, useState, setState} from 'react';
import Logo from './styling/logo.png'
import './styling/RegisterPage.css'
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome'

function RegisterPage (props){
  // const [nickName, setNickName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password,setPassword] = useState(null);
  // const handleInputChange = (e) => {
  //   const {id , value} = e.target;
  //   if(id === "nickName"){
  //     setNickName(value);
  //   }
  //   if(id === "email"){
  //     setEmail(value);
  //   }
  //   if(id === "password"){
  //     setPassword(value);
  //   }
  // }
  //const submitRegHandle = () => {
    //console.log(nickName + ' ' + email + ' ' + password);
  //};
    return(
      <form className="All-Register">
        <div className="Register-Header">
          <img src={Logo} name="Logo" onClick={() => props.setIsOpen(!props.isOpen)}/>
        </div>
        <div className="Register-Form">
          <input type="text" placeholder="כינוי" />
          <input type="text" placeholder="אימייל" />
          <input type="password" placeholder="סיסמא" />
          <input type="submit" value="הרשם" />
        </div>
        <div className="Forgot">
          <span>שכחתי סיסמא</span>
        </div>
      </form>
    )
}
export default RegisterPage;

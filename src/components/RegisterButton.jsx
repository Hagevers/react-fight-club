import React, {Component, useState} from 'react';
import "./styling/RegisterButton.css";
import RegisterPage from './RegisterPage';

function RegisterButton(){
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div>
      {isOpen ? <RegisterPage isOpen = {isOpen} /> :
      <div className="HomeWrapper">
        <div className="para">
          <p>הרכיבו את הצבא החזק ביותר</p>
          <p>והצטרפו למועדון הקרב</p>
        </div>
        <div className="div-btn">
          <button className="Reg-Btn" onClick={() => setIsOpen(!isOpen)}>התחילו עכשיו</button>
        </div>
      </div>
    }
    </div>
  );
}

export default RegisterButton;

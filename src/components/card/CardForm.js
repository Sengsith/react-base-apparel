import React, { useRef } from 'react';

import ICON_ARROW from '../../images/icon-arrow.svg';
import ICON_ERROR from '../../images/icon-error.svg';

import variables from '../../scss/abstracts/_colors.scss';

const CardForm = () => {
  const emailRef = useRef(null);

  // Basic validate function for email input
  const validate = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = emailRef.current.value;
    if (email === "" || !regex.test(email)) {   
      document.getElementById("error-msg").style.visibility = "visible";
      document.getElementById('error-icon').style.visibility = "visible";
      document.getElementById('input').style.outlineColor = variables.errorInput;
      document.getElementById('input').style.outlineWidth = "2px";
    }
  }

  // Change visibility of error message when user starts typing into email input
  const handleOnChange = () => {
    document.getElementById("error-msg").style.visibility = "hidden";
      document.getElementById('error-icon').style.visibility = "hidden";
      document.getElementById('input').style.outlineColor = variables.defaultInput;
      document.getElementById('input').style.outlineWidth = "1px";
  }

  return (
  <form className="CardForm">
    <div className="CardFormInner">
      <input id="input" ref={emailRef} onChange={handleOnChange} type="text" name="email" placeholder="Email Address"></input>
      <span id="error-icon" className="Error"><img src={ICON_ERROR} alt="red exclamation point"/></span>
      <button type="submit" onClick={validate}><img src={ICON_ARROW} alt="right arrow"/></button>
    </div>
    <span id="error-msg" className="Error">Please provide a valid email</span>
  </form>
  );
}

export default CardForm;
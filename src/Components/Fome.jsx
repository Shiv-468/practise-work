import React, { useState } from "react";
function Validation() {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [mailError, setMailError] = useState("");
  const [password, setpassword] = useState("");
  const [userError, setUerError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const Formsubmit = (e) => {
    e.preventDefault();
    console.log(mail, password);    
    setpassword("");
    setmail("");
    setname("");
    vaildUsername();
    validatePassword();
    validateEmail();
    
  };
  const validateEmail = () => {
    const Mailregx = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!Mailregx.test(mail)) {
      setMailError("Enter your email id");
    } else {
      setMailError("Done");
    }
  };

  const validatePassword = () => {    
    const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordregex.test(password)) {
      setPasswordError(        
        "Minimum eight characters, at least one letter, one number and one special character:"
      );
    } else {
      setPasswordError("Done");
    }
  };
  const vaildUsername = () => {
    const UserNameRegex = /^[0-9A-Za-z]{3,16}$/;
    if (!UserNameRegex.test(name)) {
      setUerError("Enter your Name");
    } else {
      setUerError("Done");
    }
  };
  return (
    <div className="pt-5">

      <h2>From Validation Task</h2>
      <form onSubmit={Formsubmit}>
      <label htmlFor="name">Name:- </label>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} onBlur={vaildUsername} />
        {userError && <span>{userError}</span>} <br/>
        <label htmlFor="Email">Email :-</label>
        <input type="mail" value={mail} onChange={(e) => setmail(e.target.value)} onBlur={validateEmail} />
        {mailError && <span>{mailError}</span>}
        <br />
        <label htmlFor="password">Password :-</label>
        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} onBlur={validatePassword}/>
        {passwordError && <span>{passwordError}</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Validation;
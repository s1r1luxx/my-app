import React, { useState } from 'react'
import './LoginSignup.css'

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="Text">{action}</div>
        </div>
        <div className="inputs">
            <div className="input">
                <input placeholder=" Username" type="username"/>
            </div>
            
            <div className="input">
                <input placeholder=" Password" type="password"/>
            </div>
        </div>
        {action==="Sign Up"? <div></div>:<div className="forgot-password">Forget Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Log in"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log in")}}>Log in</div>
        </div>
    </div>
  );
};

export default LoginSignup
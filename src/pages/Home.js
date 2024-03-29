import React, { useState } from 'react'
import './Home.css'


import home_pic from '../Pictures/pexels-cats-coming-406152.jpg'

function Home() {
    const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <img src={home_pic}></img>
        <text1>Welcome to</text1>
        <text2>MUSTODE CLEAN FOOD</text2>
        <div className="submit-container">
            <div className={action==="Log in"?"submit":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <text3>or</text3>
            <div className={action==="Sign Up"?"submit":"submit"} onClick={()=>{setAction("Log in")}}>Log in</div>
        </div>
    </div>
  )
}

export default Home
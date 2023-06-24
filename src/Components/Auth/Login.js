import React from 'react';
import './assets/login.css';
export const Login = () => {
  return (
    <div >

<div className="wrapper fadeInDown mt-4">
  <div id="formContent">
  


    <div className="fadeIn first mt-4">
      <h3>LOGIN</h3>
    </div>

   
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>


    </div>
  )
}


import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

export const Header = () => {

  let [btnName, setBtnName] = useState('Login');

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
             src={LOGO_URL}
             alt="app logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout'): setBtnName('Login');
            }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

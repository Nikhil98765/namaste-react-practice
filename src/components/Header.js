import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {useOnlineStatus} from "../hooks/useOnlineStatus";

export const Header = () => {

  let [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus ? '🟢': '🔴'}
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

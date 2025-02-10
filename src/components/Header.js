import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import {useContext, useState} from "react";
import {useOnlineStatus} from "../hooks/useOnlineStatus";
import {UserContext} from "../utils/UserContext";
import {useSelector} from "react-redux";

export const Header = () => {

  let [btnName, setBtnName] = useState('Login');
  const {loggedInUser} = useContext(UserContext);

  const items = useSelector(state => state.cart.items);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? '🟢': '🔴'}
          </li>
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
              Cart - ({items.length})
            </Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
          <button
            className="login-btn "
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

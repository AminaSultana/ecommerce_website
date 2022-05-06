import React, {useContext} from "react";

import classes from "./Header.module.css";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = ()=>{
    authCtx.logout();
  }

  return (
    <>
      <header className={classes.header_main}>
        <nav className={classes.title}>
          <ul className={classes.ul}>
            <li className={classes.header_content}>
              <NavLink activeClassName={classes.active} to="/home">
                HOME
              </NavLink>
            </li>
            <li className={classes.header_content}>
              <NavLink activeClassName={classes.active} to="/store">
                STORE
              </NavLink>
            </li>
            <li className={classes.header_content}>
              <NavLink activeClassName={classes.active} to="/aboutus">
                ABOUT
              </NavLink>
            </li>
            <li className={classes.header_content}>
              <NavLink activeClassName={classes.active} to="/contactus">
                CONTACT US
              </NavLink>
            </li>
            <li className={classes.header_content}>
              <NavLink activeClassName={classes.active} to="/">
                LOG IN 
              </NavLink>
            </li>
            <li>
              {authCtx.isLoggedIn && 
              <button onClick={logoutHandler}>Logout</button>
              }
            </li>
          </ul>
          <Cart />
        </nav>
        <h1 className={classes.header_title}>The Generics</h1>
      </header>
    </>
  );
};

export default Header;

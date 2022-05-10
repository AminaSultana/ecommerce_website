import React, { useContext } from "react";

import classes from "./Header.module.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      <header className={classes.header_main}>
        <nav className={classes.title}>
          <ul className={classes.ul}>
            {/* <li className={classes.header_content}>
              <Link  to="/home">
                HOME
              </Link>
            </li> */}
            <li className={classes.header_content}>
              <Link to="/store">
                STORE
              </Link>
            </li>
            <li className={classes.header_content}>
              <Link to="/aboutus">
                ABOUT
              </Link>
            </li>
            <li className={classes.header_content}>
              <Link to="/contactus">
                CONTACT US
              </Link>
            </li>
            <li className={classes.header_content}>
                {authCtx.isLoggedIn && (
                  <button onClick={logoutHandler} className={classes.logout_btn}>Logout</button>
                )}                
            </li>
          </ul>
          <span className={classes.cart}>{authCtx.isLoggedIn && <Cart />}</span>
        </nav>
        <div className={classes.header_title_div}>
          <h1 className={classes.header_title}>The Generics</h1>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";

import classes from "./Header.module.css";
import ModalCart from "../Modal/ModalCart";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <li className={classes.header_content}>STORE</li>
            <li className={classes.header_content}>
              <NavLink activeClassName={classes.active} to="/aboutus">
                ABOUT
              </NavLink>
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

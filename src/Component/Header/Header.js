import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header_main}>
        <nav className={classes.title}>
          <ul className={classes.ul}>
            <li className={classes.header_content}>HOME</li>
            <li className={classes.header_content}>STORE</li>
            <li className={classes.header_content}>ABOUT</li>
          </ul>
          <button className={classes.cart_button}>Cart</button>
        </nav>
        <h1 className={classes.header_title}>The Generics</h1>
      </header>
    </>
  );
};

export default Header;

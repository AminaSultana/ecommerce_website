import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer_main}>
        <span>
            The Generics
        </span>
        <span>
          <img src='../Assests/icons8-facebook.svg' alt="logo"></img>
          <img src="../Assests/icons8-spotify-481.png" alt="logo"></img>
          <img src='../Assests/icons8-youtube.svg' alt="logo"></img>
        </span>
    </footer>
  );
}

export default Footer;

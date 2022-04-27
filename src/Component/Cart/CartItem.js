import React from "react";

import classes from "./CartItem.module.css";


const CartItem = (props) => {
  return (
    <li key={props.key} className={classes.li}>
      <span className={classes.title_1}>
        <img src={props.imageUrl} alt="Product" width="70rem" height="50rem" />
        <span>{props.title}</span>
      </span>
      <span className={classes.price}>{props.price}</span>
      <span className={classes.quantity}>
        <span className={classes.title_2}>{props.quantity}</span>
        <button className={classes.btn_remove}>REMOVE</button>
      </span>
    </li>
  );
};

export default CartItem;

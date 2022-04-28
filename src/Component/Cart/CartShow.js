import React, { useContext } from "react";

import ModalCart from "../Modal/ModalCart";
import classes from "./CartShow.module.css";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart_context";

const CartShow = () => {
  const cartContext = useContext(CartContext);
  const items = (
    <ul>
      {cartContext.listOfItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </ul>
  );
  /* const items = (<ul>
    { cartContext.listOfItems.map((item) => ({
        return (
          <CartItem
          key={item.id}
          id={item.id}
          quantity={item.quantity}
          imageUrl={item.imageUrl}
          title={item.title}
          price={Number(100)}
          />
          )}}
        </ul>) */

  return (
    <ModalCart>
      <div className={classes.cart_show}>
        <button className={classes.cart_cancel_btn}>X</button>
        <h1 className={classes.title}>CART</h1>
        <div className={classes.subtitle}>
          <span className={classes.subtitle_name}>ITEM</span>
          <span className={classes.subtitle_name}>PRICE</span>
          <span className={classes.subtitle_name}>QUANTITY</span>
        </div>
        {items}
        <div className={classes.total}>
          <span>Total</span>
          <span className={classes.total_amount}>
            {cartContext.totalAmount}
          </span>
        </div>
      </div>
    </ModalCart>
  );
};

export default CartShow;

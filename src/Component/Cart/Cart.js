import React, {useState} from 'react';

import classes from './Cart.module.css'
import CartShow from './CartShow';

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = ()=>{
        setShowCart(true)
    }
  return (
    <>
      <button onClick={showCartHandler} className={classes.cart_button}>Cart</button>
      {showCart && <CartShow/>}
    </>
  );
}

export default Cart;

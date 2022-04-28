import React, {useState, useContext} from 'react';

import classes from './Cart.module.css'
import CartShow from './CartShow';
import CartContext from '../../Store/cart_context';

const Cart = () => {
  const cartContext = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = ()=>{
        setShowCart(true)
    }
  return (
    <>
    <div>
      <button onClick={showCartHandler} className={classes.cart_button}>Cart
      <p className={classes.cart_qty}>{cartContext.totalQuantity}</p>
      </button>
      {showCart && <CartShow/>}
    </div>
    </>
  );
}

export default Cart;

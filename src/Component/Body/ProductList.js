import React, { useContext } from "react";
import CartContext from "../../Store/cart_context";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItems(props);
  };
  return (
    <li className={classes.list_main} key={props.id}>
      <h2>{props.title}</h2>
      {<img src={props.imageUrl} alt="Product" />}
      <div>
        <h3 className={classes.price}>{`$${props.price}`}</h3>
        <button className={classes.list_button} onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ProductList;

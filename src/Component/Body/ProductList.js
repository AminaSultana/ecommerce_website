import React from 'react';

import classes from './ProductList.module.css'

const ProductList = (props) => {
  return (
      <li key={props.imageUrl} className={classes.list_main}>
          <h2>{props.title}</h2>
          {<img src={props.imageUrl} alt="Product"/>}
          <div>
              <h3 className={classes.price}>{`$${props.price}`}</h3>
              <button className={classes.list_button}>Add to Cart</button>
          </div>
      </li>
  );
}

export default ProductList;

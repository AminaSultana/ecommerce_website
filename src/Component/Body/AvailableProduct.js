import React from "react";

import ProductList from "./ProductList";
import classes from "./AvailableProduct.module.css";

const AvailableProduct = () => {
  const productsArr = [
    {
      id: "p1",
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "p2",
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "p3",
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "p4",
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const productShow = productsArr.map((item) => {
    return (
      <ProductList
        key={item.id}
        price={item.price}
        title={item.title}
        imageUrl={item.imageUrl}
        id={item.id}
      />
    );
  });
  return (
    <>
      <ul className={classes.product_ul}>{productShow}</ul>
    </>
  );
};

export default AvailableProduct;

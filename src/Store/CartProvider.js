import React, { useState, useContext,useCallback, useEffect } from "react";

import CartContext from "./cart_context";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  let newEmailString, email;
  if(authCtx.isLoggedIn){
    newEmailString = authCtx.idToken.toString();
    email = newEmailString.replace(/[@.]/gi, '');
  }
  console.log(email);

  const getCartItemFromDb = useCallback(async () => {
    console.log(" getcartitem called");
    const response = await fetch(
      `https://crudcrud.com/api/b59c4d70a3b747e7a429fb44385f89c9/cart${email}`
    );
    const data = await response.json();
    const cartItem = [];
    let amount = 0;
    for (const key in data) {
      amount += data[key].price;
      cartItem.push({
        id: data[key].id,
        title: data[key].title,
        price: data[key].price,
      });
    }
    setTotalAmount(amount)
    setCartItems(cartItem);
  }, [email]);

  useEffect(() => {
    getCartItemFromDb()
  }, [getCartItemFromDb]);

  
  const addItemToCartHandler = async (item) => {
    const response = await fetch(
      `https://crudcrud.com/api/b59c4d70a3b747e7a429fb44385f89c9/cart${email}`,
      {
        method: "POST",
        body: JSON.stringify({
          userid: email,
          id: item.id,
          price: item.price,
          title: item.title,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      setTotalQuantity(prev=>prev+1)
    }

    /*  const updatedTotalAmount = cart_context.totalAmount + item.price;
    setTotalAmount(updatedTotalAmount);
    setTotalQuantity((preQty) => preQty + 1);
    const itemIdx = cartItems.findIndex((i) => i.id === item.id);
    let existingItem = cartItems[itemIdx];
    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      let updatedItems = [...cartItems];
      updatedItems[itemIdx] = updatedItem;
      setCartItems(updatedItems);
      return;
    }
    let updatedItem = { ...item, quantity: 1 };
    setCartItems([...cartItems, updatedItem]); */
  };

  const removeItemToCartHandler = (id) => {};

  const cart_context = {
    listOfItems: cartItems,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
    addItems: addItemToCartHandler,
    removeItems: removeItemToCartHandler,
  };

  return (
    <>
      <CartContext.Provider value={cart_context}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;

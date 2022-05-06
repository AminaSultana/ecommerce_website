import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import BottomCartButton from "./Component/Cart/BottomCartButton";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import CartProvider from "./Store/CartProvider";
import AboutUs from "./Component/NavigationPages/AboutUs";
import Home from "./Component/NavigationPages/Home";
import ContactUs from "./Component/NavigationPages/ContactUs";
import ProductDetail from "./Component/Body/ProductDetail";
import AvailableProduct from "./Component/Body/AvailableProduct";
import Login from "./Component/Auth/Login";
import AuthContext from "./Store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const productsArr = [
    {
      id: "p1",
      title: "Colors",
      price: 100,
      imageUrl: {
        imageUrl1:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        imageUrl2:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

        imageUrl3:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

        imageUrl4:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    },

    {
      id: "p2",
      title: "Black and white Colors",
      price: 50,
      imageUrl: {
        imageUrl4:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        imageUrl1:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        imageUrl2:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        imageUrl3:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
    },

    {
      id: "p3",
      title: "Yellow and Black Colors",

      price: 70,
      imageUrl: {
        imageUrl1:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        imageUrl2:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        imageUrl3:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        imageUrl4:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      },
    },

    {
      id: "p4",
      title: "Blue Color",
      price: 100,
      imageUrl: {
        imageUrl1:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        imageUrl2:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        imageUrl3:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        imageUrl4:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      },
    },
  ];

  const formSubmitHandler = async (userData) => {
    const response = await fetch(
      "https://react-http-f9ddb-default-rtdb.firebaseio.com/userDetails.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    console.log(res);
  };

  return (
    <CartProvider>
      <Header />
      <Switch>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/store">
          {authCtx.isLoggedIn && <AvailableProduct data={productsArr} />}
          {!authCtx.isLoggedIn && <Redirect to="/"/>}
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contactus">
          <ContactUs onFormSubmit={formSubmitHandler} />
        </Route>
        <Route exact path="/store/:productId">
          <ProductDetail data={productsArr} />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        
      </Switch>
      {/*<BottomCartButton />*/}
      {/* <Footer />*/}
    </CartProvider>
  );
}

export default App;

import React, { Suspense, useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import CartProvider from "./Store/CartProvider";
//import Home from "./Component/NavigationPages/Home";
//import BottomCartButton from "./Component/Cart/BottomCartButton";
//import ProductDetail from "./Component/Body/ProductDetail";
//import AvailableProduct from "./Component/Body/AvailableProduct";
import Login from "./Component/Auth/Login";
import AuthContext from "./Store/auth-context";

const AboutUs = React.lazy(() => import("./Component/NavigationPages/AboutUs"));
const ContactUs = React.lazy(()=> import("./Component/NavigationPages/ContactUs"));
const AvailableProduct = React.lazy(()=> import("./Component/Body/AvailableProduct"))
const ProductDetail = React.lazy(()=> import("./Component/Body/ProductDetail"))
const NotFound = React.lazy(()=> import("./Pages/NotFound,"))

function App() {
  const authCtx = useContext(AuthContext);

  const productsArr = [
    {
      id: "pone",
      title: "Colors",
      price: 100,
      quantity: 1,
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
      id: "ptwo",
      title: "Black and white Colors",
      price: 50,
      quantity: 1,
      imageUrl: {
        imageUrl4:
          "https://rukminim1.flixcart.com/image/128/128/k4324…84438106-puma-original-imafn2pjhhgt6vyd.jpeg?q=70",
        imageUrl1:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        imageUrl2:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        imageUrl3:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      },
    },

    {
      id: "pthree",
      title: "Yellow and Black Colors",

      price: 70,
      quantity: 1,
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
      id: "pfour",
      title: "Blue Color",
      price: 100,
      quantity: 1,
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
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            {!authCtx.isLoggedIn && <Login />}
            {authCtx.isLoggedIn && <Redirect to="/store" />}
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
          <Route path="/store" exact>
            {authCtx.isLoggedIn && <AvailableProduct data={productsArr} />}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          {/*  <Route path="/home">
            <Home />
          </Route> */}
          <Route path="/contactus">
            <ContactUs onFormSubmit={formSubmitHandler} />
          </Route>
          <Route path="/store/:productId">
            <ProductDetail data={productsArr} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      {/* { authCtx.isLoggedIn && <BottomCartButton />}*/}
      <Footer />
    </CartProvider>
  );
}

export default App;

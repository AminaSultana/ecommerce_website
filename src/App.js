import "./App.css";
import { Route, Switch } from "react-router-dom";

import Main from "./Component/Body/Main";
import BottomCartButton from "./Component/Cart/BottomCartButton";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import CartProvider from "./Store/CartProvider";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";

function App() {
  const formSubmitHandler = async(userData)=>{
    const response = await fetch("https://react-http-f9ddb-default-rtdb.firebaseio.com/userDetails.json", 
    {method: "POST", 
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    const res = await response.json()
    console.log(res);
  }
  return (
    <CartProvider>
      <Header />
      <Switch>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/">
          <Main />
          <BottomCartButton />
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/contactus">
          <ContactUs onFormSubmit={formSubmitHandler}/>
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;

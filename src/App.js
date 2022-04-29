import "./App.css";
import { Route, Switch } from "react-router-dom";

import Main from "./Component/Body/Main";
import BottomCartButton from "./Component/Cart/BottomCartButton";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import CartProvider from "./Store/CartProvider";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";

function App() {
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
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;

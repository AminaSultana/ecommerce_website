import "./App.css";
import Main from "./Component/Body/Main";
import CartButton from "./Component/Cart/CartButton";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import CartProvider from "./Store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
      <CartButton />
      <Footer />
    </CartProvider>
  );
}

export default App;

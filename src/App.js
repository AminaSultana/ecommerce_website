import './App.css';
import Main from './Component/Body/Main';
import CartButton from './Component/Cart/CartButton';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <CartButton/>
     <Footer/>
    </div>
  );
}

export default App;

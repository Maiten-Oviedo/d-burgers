
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Navbar from './components/NavBar';
import { useState } from 'react';
import Cart from './components/Cart';
import burgers from './mocks/burgers.json'
import Carta from './components/Carta';
import Footer from './components/Footer';


function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numberCart, setNumberCart] = useState(0);
  
  const handleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  const handleCart = (burguer) => {
    const item = cartItems.findIndex(item => item.id === burguer.id);
    if (item === -1) {
      setCartItems([...cartItems, {...burguer, quantity: 1}]);
      setNumberCart(numberCart + 1);
    }else{
      const newCartItems = [...cartItems];
      newCartItems[item].quantity += 1;
      setCartItems(newCartItems);
      setNumberCart(numberCart + 1);
    }
  }
  
  return (
    <div>
      <Navbar handleCartVisible={handleCartVisible} numberCart={numberCart}/>
      <Home />
      { cartVisible && <Cart handleCartVisible={handleCartVisible} cartItems={cartItems}/> }
      <Carta burgers={burgers} handleCart={handleCart}/>
      <Nosotros />
      <Footer/>
    </div>
  );
}

export default App;

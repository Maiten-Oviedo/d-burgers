
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Navbar from './components/NavBar';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import burgers from './mocks/burgers.json'
import Carta from './components/Carta';


function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  const handleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  const handleCart = (burguer) => {
    const item = cartItems.findIndex(item => item.id === burguer.id);
    if (item === -1) {
      setCartItems([...cartItems, {...burguer, quantity: 1}]);
    }else{
      const newCartItems = [...cartItems];
      newCartItems[item].quantity += 1;
      setCartItems(newCartItems);
    }
  }

  useEffect(() => {
    console.log("CartItems actualizado:", cartItems);
    // Aquí podrías realizar otras operaciones dependientes de cartItems
  }, [cartItems]);
  
  return (
    <div>
      <Navbar handleCartVisible={handleCartVisible}/>
      <Home />
      { cartVisible && <Cart handleCartVisible={handleCartVisible} cartItems={cartItems}/> }
      <Carta burgers={burgers} handleCart={handleCart}/>
      <Nosotros />
    </div>
  );
}

export default App;

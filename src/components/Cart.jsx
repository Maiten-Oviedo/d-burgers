import React from 'react';
import { CloseIcon } from './Icons';
import CartItem from './CartItem';

const Cart = ({ handleCartVisible, cartItems }) => {
  return (
    <div className={`fixed inset-y-0 right-0 w-screen bg-[#ddd] shadow-lg z-50 transform ${handleCartVisible ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`}>
      <div className="flex justify-between items-center px-4 py-2 border-b border-b-black">
        <h1 className="text-lg font-bold uppercase">Carrito</h1>
        <button onClick={handleCartVisible} className="text-center">
          <CloseIcon width={24} height={24} color="black"/>
        </button>
      </div>
      <div className="p-2 flex flex-col gap-5 justify-center items-center">
        {cartItems.length < 1 ? 
          <div className="text-center text-white text-2xl">No hay productos en el carrrito</div> 
          :
          cartItems.map((item) => {
            return(
              <CartItem
              key={item.id}
              item={item}
            />
            )
          })
        }
      </div>
    </div>
  );
};

export default Cart;

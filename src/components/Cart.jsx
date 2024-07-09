import React from 'react';
import { CloseIcon } from './Icons';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import { totalCalculator } from '../utils/totalCalculator';

const Cart = ({ handleCartVisible, cartItems }) => {

  let total = totalCalculator(cartItems);
  return (
    <div className={`fixed pb-10 flex flex-col px-5 gap-5 inset-y-0 right-0 w-screen bg-[#ddd] shadow-lg z-50 transform ${handleCartVisible ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`}>
      <div className="flex justify-between items-center px-4 py-2 border-b border-b-black">
        <h1 className="text-lg font-bold uppercase">Carrito</h1>
        <button onClick={handleCartVisible} className="text-center">
          <CloseIcon width={24} height={24} color="black"/>
        </button>
      </div>
      <div className="flex flex-col gap-5 max-h-[400px] overflow-auto">
        {cartItems.length < 1 ? 
          <div className="text-center text-black text-2xl">No hay productos en el carrrito :(</div> 
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
      {cartItems.length < 1 ? <></> :  
        <>
          <a 
            href="https://maps.app.goo.gl/NKMDqkAn4DmsNvji6" 
            target='_blank' rel='noopener noreferrer' 
            className='bg-[#02a698] text-center w-full text-white py-3 px-10 md:px-4'>
              PEDIR EN WHATSAPP ${total}
          </a>
          <button
            className='bg-[#a63002] text-center w-full text-white py-3 rounded-none'
          >VACIAR CARRITO</button>
        </>
      }
    </div>
  );
};
export default Cart;

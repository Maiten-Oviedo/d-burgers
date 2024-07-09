import React from 'react'

const CartaItem = ({burger, handleCart}) => {
  return (
    <article className='md:max-w-[250px] flex flex-col justify-between'>
      <img src={burger.thumbnail} className='w-full h-auto' alt={burger.name}/>
      <div className='h-full flex flex-col justify-between'>
        <strong className='text-primary uppercase'>{burger.name}</strong>
        <p className='text-black uppercase'>{burger.description}</p>
        <p className='text-black font-bold uppercase'>${burger.price}</p>
        <button onClick={()=>{handleCart(burger)}} className='w-full text-center text-white font-bold bg-primary uppercase rounded-none'>Añadir al carrito</button>
      </div>
    </article>
  )
}

export default CartaItem
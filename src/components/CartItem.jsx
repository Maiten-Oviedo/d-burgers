import React from 'react'

const CartItem = ({item}) => {

  let price = item.price * item.quantity;
  return (
    <article className='flex w-full justify-between items-center bg-slate-800'>
      <img className='w-12 h-auto' src={item.thumbnail} alt={item.name} />
      <div className='w-full p-5 flex justify-between text-white text-start'>
        <span className=''>{item.name}</span>
        <strong className=''>{item.quantity}</strong>
        <strong className=''>${price}</strong>
      </div>
    </article>
  )
}
export default CartItem
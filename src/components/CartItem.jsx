import React from 'react'

const CartItem = ({item}) => {
  return (
    <article className='flex w-full justify-between items-center bg-slate-800'>
      <img className=' w-24 h-auto' src={item.thumbnail} alt={item.name} />
      <div className='w-full p-5 flex justify-between text-white'>
        <span className=''>{item.name}</span>
        <strong className=''>{item.quantity}</strong>
      </div>
    </article>
  )
}
export default CartItem
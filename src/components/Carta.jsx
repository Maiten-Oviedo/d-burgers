import CartaItem from './CartaItem'

const Carta = ({burgers, handleCart}) => {
  console.log(burgers)
  return (
    <section id='nuestra-carta' className='px-[10%] md:px-[15%] pt-12'>
      <h2 className='font-bold text-4xl uppercase'>NUESTRA CARTA</h2>
      <strong className='uppercase text-primary'>Made in Beltrán</strong>
      <div className='flex flex-wrap gap-10 justify-center md:justify-between'>
        {burgers.map((burger => {
          return(
            <CartaItem
            key={burger.id}
            burger={burger}
            handleCart={handleCart}
          />
          )
        }))}
      </div>
      
    </section>
    
  )
}

export default Carta
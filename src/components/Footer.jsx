import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 px-10 bg-gray-800' >
      <div className='text-start flex justify-between text-white'>
        <div className='flex flex-col'>
          <h3 className='text-lg uppercase'>Secciones</h3>
          <a href="#home">Home</a>
          <a href="#nuestra-carta">Carta</a>
          <a href="#nosotros">Nosotros</a>
        </div>
        <div className='text-end'>
          <h3 className='text-lg uppercase'>Seguinos en</h3>
          <a href="">Instagram</a>
          <h3 className='text-lg uppercase'>Pedí en</h3>
          <a href="">Whatsapp</a>
        </div>
      </div>
      <p className='text-center text-white'>By _maiten</p>
    </footer>
  )
}

export default Footer
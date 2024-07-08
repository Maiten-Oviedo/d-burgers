// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-cover md:bg-center bg-no-repeat h-screen flex items-center w-screen"
         style={{ backgroundImage: "url('/assets/images/background.jpg')" }}>
      <div className="flex flex-col gap-3 mx-auto items-center md:items-start md:text-start md:m-0 md:px-[15%]">
        <h1 className="text-2xl md:text-4xl text-white mb-4 md:mb-0">
          ¿Ya probaste nuestras <br/>
          <span className="text-3xl md:text-5xl font-bold text-primary uppercase">hamburguesas?</span>
        </h1>
        <a href="#nuestra-carta" className='md:hidden bg-primary rounded-md text-white py-3 px-10'>VER CARTA</a>
        <a href="#nosotros" className='md:hidden bg-primary rounded-md text-white py-3 px-10'>NOSOTROS</a>
        <a href="https://maps.app.goo.gl/NKMDqkAn4DmsNvji6" target='_blank' rel='noopener noreferrer' className='md:hidden bg-primary rounded-md text-white py-3 px-10'>UBICACION</a>
        <a href="https://maps.app.goo.gl/NKMDqkAn4DmsNvji6" target='_blank' rel='noopener noreferrer' className='bg-[#02a698] rounded-md text-white py-3 px-10 w-max md:px-4'>WHATSAPP</a>
      </div>
    </section>

  );
};

export default Home;

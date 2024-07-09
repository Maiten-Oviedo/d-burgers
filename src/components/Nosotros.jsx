import { InstagramEmbed } from 'react-social-media-embed'

const Nosotros = () => {
  const instagramPostUrl = 'https://www.instagram.com/d._burgers/';
  return (
    <section id="nosotros" className="flex flex-col items-center w-screen py-12">
      <div className='px-[10%] md:px-[15%]'>
        <h2 className='font-bold text-4xl uppercase text-start'>NOSOTROS</h2>
        <strong className='uppercase text-primary'>DESDE 2019</strong>
        <p className="text-xl">Somos una empresa dedicada a la venta de hamburguesas
          artesanales, con una gran variedad de sabores y opciones para todos los gustos.
          Nuestros productos son elaborados con ingredientes de alta calidad y
          preparados con mucho cuidado para garantizar la mejor experiencia de
          consumo posible.
        </p>
        <h2 className='font-bold text-3xl uppercase text-start mt-10'>SEGUINOS EN</h2>
        <strong className='uppercase text-primary'>INSTAGRAM</strong>
      </div>
      <InstagramEmbed url={instagramPostUrl} width={330} />
    </section>
  );
};

export default Nosotros;

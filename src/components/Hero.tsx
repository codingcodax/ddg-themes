import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <main className='mx-auto mt-16 grid min-h-[70vh] w-full max-w-screen-lg gap-y-16 gap-x-10 px-4 md:grid-cols-2 md:px-8 lg:px-16'>
      <section className='mx-auto max-w-[400px] text-center md:flex md:max-w-none md:flex-col md:items-start md:justify-center md:text-left'>
        <h1>
          Your browser,
          <br />
          your looks
        </h1>
        <p className='mt-3 text-xl md:mt-8 md:text-2xl'>
          Customize DuckDuckGo with your favorite theme, choose from a number of
          themes and install it.
        </p>

        <Link className='primary-button mt-8' href='/themes'>
          Explore the Themes
        </Link>
      </section>

      <figure className='mx-auto max-w-lg px-4 md:flex md:items-center md:px-0'>
        <Image
          alt='guy in art museum gallery'
          height={639}
          src='/images/art-museum.svg'
          width={1046}
        />
      </figure>
    </main>
  );
};

export default Hero;

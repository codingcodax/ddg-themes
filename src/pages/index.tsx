import { type NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <main className='mx-auto mt-16 grid gap-16'>
      <section className='mx-auto max-w-[400px] text-center'>
        <h1>
          Your browser,
          <br />
          your looks
        </h1>
        <p className='mt-3 px-4 text-xl'>
          Customize DuckDuckGo with your favorite theme, choose from a number of
          themes and install it.
        </p>

        <Link className='primary-button mt-8' href='/themes'>
          Explore the Themes
        </Link>
      </section>

      <figure className='px-4'>
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

export default Home;

const Footer = () => {
  return (
    <footer className='mt-16 px-4 pb-2 md:px-10 md:pt-8 lg:px-16'>
      <div className='h-px w-full bg-gray-90/20 dark:bg-white/20' />
      <p className='mt-8'>
        Crafted by{' '}
        <a
          href='https://www.codingcodax.dev/'
          rel='noopener noreferrer'
          target='_blank'
        >
          @codingcodax
        </a>
      </p>
    </footer>
  );
};

export default Footer;

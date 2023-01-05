import ThemesData from '~/data/themes';

import Theme from './theme';

const Themes = () => {
  return (
    <section className='mx-auto mt-16 w-full max-w-screen-lg px-4 md:px-8 lg:px-16'>
      <h2 className='mb-10 text-center md:mb-8 md:text-left' id='themes'>
        Themes
      </h2>

      <ul className='grid gap-8 px-4 sm:grid-cols-2 md:px-0 lg:grid-cols-3'>
        {ThemesData.map((theme) => (
          <Theme key={theme.name} {...theme} />
        ))}
      </ul>
    </section>
  );
};

export default Themes;

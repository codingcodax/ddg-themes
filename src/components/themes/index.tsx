import { useMemo, useState } from 'react';

import ThemesData from '~/data/themes';

import Searchbar from './Searchbar';
import Select from './Select';
import Theme from './theme';

const Themes = () => {
  const [typeSelected, setTypeSelected] = useState('all');
  const [search, setSearch] = useState('');

  const filteredThemes = useMemo(() => {
    const themesByType =
      typeSelected === 'all'
        ? ThemesData
        : ThemesData.filter((theme) => theme.type === typeSelected);

    return themesByType.filter((theme) =>
      theme.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, typeSelected]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className='mx-auto mt-16 w-full max-w-screen-lg px-4 md:px-8 lg:px-16'>
      <h2 className='mb-4 text-center md:text-left' id='themes'>
        Themes
      </h2>

      <div className='mb-10 flex space-x-2 px-4 md:w-1/2 md:px-0'>
        <Searchbar value={search} onChange={handleSearch} />
        <Select value={typeSelected} onValueChange={setTypeSelected} />
      </div>

      <ul className='grid gap-8 px-4 sm:grid-cols-2 md:px-0 lg:grid-cols-3'>
        {filteredThemes.map((theme) => (
          <Theme key={theme.name} {...theme} />
        ))}
      </ul>
    </section>
  );
};

export default Themes;

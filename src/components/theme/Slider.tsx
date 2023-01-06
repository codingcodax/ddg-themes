import { useState } from 'react';
import Image from 'next/image';

import type { Theme } from '~/types';

import Icons from '../icons';

interface SliderProps {
  name: Theme['name'];
}

const Slider = ({ name }: SliderProps) => {
  const [page, setPage] = useState(0);

  const nameFormatted = name.toLowerCase().replaceAll(' ', '-');

  const images = [nameFormatted, `${nameFormatted}-results`];

  const handleClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setPage((prev) => (prev === 0 ? 1 : 0));
      return;
    }

    setPage((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <figure className='group relative aspect-video overflow-clip bg-white'>
      <Image
        alt={`${name} theme preview`}
        className='aspect-video object-cover object-top'
        height={720}
        src={`/images/themes/${images[page]}.png`}
        width={1280}
      />
      <button
        className='absolute top-1/2 left-2 -translate-y-1/2 rounded-lg bg-white/40 p-2 mix-blend-difference hover:bg-white/60 dark:bg-black/40 dark:hover:bg-black/60 sm:hidden sm:group-hover:inline-block'
        onClick={() => handleClick('left')}
      >
        <Icons.NavArrowLeft className='h-4 w-4' />
      </button>

      <button
        className='absolute top-1/2 right-2 -translate-y-1/2 rounded-lg bg-white/40 p-2 mix-blend-difference hover:bg-white/60 dark:bg-black/40 dark:hover:bg-black/60 sm:hidden sm:group-hover:inline-block'
        onClick={() => handleClick('right')}
      >
        <Icons.NavArrowRight className='h-4 w-4' />
      </button>
    </figure>
  );
};

export default Slider;

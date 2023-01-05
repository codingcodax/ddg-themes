import Image from 'next/image';
import { useState } from 'react';

import type { Theme as ThemeType } from '~/types';

import LivePreviewButton from './LivePreviewButton';
import GetThemeButton from './GetThemeButton';
import Colors from './colors';

type ThemeProps = ThemeType;

const Theme = ({ name, cookie, palette }: ThemeProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className='grid overflow-clip rounded-lg bg-white shadow-[0_0.125rem_0.375rem_rgba(0,0,0,0.1),_0_0.5rem_1rem_rgba(0,0,0,0.08)] dark:bg-violet-70'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <figure className='aspect-video overflow-clip bg-white'>
        <Image
          alt={`${name} theme preview`}
          className='aspect-video object-cover object-top'
          height={720}
          src={`/images/themes/${
            !isHover
              ? name.toLowerCase().replace(' ', '-')
              : name.toLowerCase().replace(' ', '-') + '-results'
          }.png`}
          width={1280}
        />
      </figure>
      <div className='p-4'>
        <h4 className='font-bold'>{name}</h4>
        <div className='flex items-center justify-between'>
          <p className=''>Color Palette:</p>
          <Colors palette={palette} />
        </div>
        <div className='mt-3 grid gap-y-2'>
          <LivePreviewButton cookie={cookie} />
          <GetThemeButton cookie={cookie} name={name} />
        </div>
      </div>
    </li>
  );
};

export default Theme;

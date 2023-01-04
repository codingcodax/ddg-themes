import Image from 'next/image';
import { useState } from 'react';

import type { Theme as ThemeType } from '~/types';
import { applyTheme, copyToClipboard } from '~/utils';

import Icons from './icons';

type ThemeProps = ThemeType;

const Theme = ({ name, cookie, palette }: ThemeProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleCopy = () => {
    copyToClipboard(applyTheme.replace('COOKIE', cookie).replace('NAME', name));
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

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
          <div className='flex items-center space-x-1'>
            {palette.map((color) => (
              <span
                key={color}
                className={`inline-block h-4 w-4 rounded-sm border`}
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>
        <div className='mt-3 grid gap-y-2'>
          <a
            className='ghost-button flex items-center text-sm'
            href={`https://duckduckgo.com/?k${cookie
              .slice(0, -1)
              .split('; ')
              .join('&k')}`}
            rel='noopener noreferrer'
            target='_blank'
          >
            Live Preview <Icons.OpenNewWindow className='ml-2 h-4 w-4' />
          </a>

          <button
            className={`ghost-button flex items-center text-sm ${
              isCopied
                ? 'cursor-not-allowed text-green-50 hover:bg-green-60/20 hover:text-green-60 dark:text-green-30 dark:hover:bg-green-40/20 dark:hover:text-green-40'
                : ''
            }`}
            disabled={isCopied}
            type='button'
            onClick={handleCopy}
          >
            {isCopied ? (
              <>
                Copied <Icons.Check className='ml-2 h-4 w-4' />
              </>
            ) : (
              <>
                Get Theme <Icons.Copy className='ml-2 h-4 w-4' />
              </>
            )}
          </button>
        </div>
      </div>
    </li>
  );
};

export default Theme;

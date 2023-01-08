import { useState } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import type { Color as ColorType } from '~/types';
import { copyToClipboard } from '~/utils';

interface ColorProps {
  color: ColorType;
}

const Color = ({ color }: ColorProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    copyToClipboard(color.hexCode);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <button
          key={color.name}
          className={`group inline-flex h-5 w-5 items-center justify-center rounded border ${
            isCopied ? 'cursor-not-allowed' : ''
          }`}
          style={{ backgroundColor: color.hexCode }}
        />
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Content
        className='radix-side-top:animate-slide-down-fade radix-side-right:animate-slide-left-fade radix-side-bottom:animate-slide-up-fade radix-side-left:animate-slide-right-fade left-4 inline-flex items-center rounded bg-white px-2 py-1 shadow-[0_0.125rem_0.375rem_rgba(0,0,0,0.1),_0_0.5rem_1rem_rgba(0,0,0,0.08)] dark:bg-black'
        side='top'
        sideOffset={4}
      >
        <PopoverPrimitive.Arrow className='fill-white dark:fill-black' />
        <span className='block text-sm sm:text-xs'>
          {color.name}: {color.hexCode}{' '}
        </span>
        <button
          className={`primary-link ml-2 w-12 text-sm sm:text-xs ${
            isCopied
              ? 'cursor-not-allowed text-green-50 hover:text-green-50 dark:text-green-30 dark:hover:text-green-30'
              : ''
          }`}
          disabled={isCopied}
          onClick={handleCopy}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

export default Color;

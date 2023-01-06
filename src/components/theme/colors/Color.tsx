import { useState } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { copyToClipboard } from '~/utils';
import Icons from '~/components/icons';

interface ColorProps {
  color: string;
}

const Color = ({ color }: ColorProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    copyToClipboard(color);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button
            key={color}
            className={`inline-flex h-4 w-4 items-center justify-center rounded border ${
              isCopied ? 'cursor-not-allowed' : ''
            }`}
            disabled={isCopied}
            style={{ backgroundColor: color }}
            onClick={handleCopy}
          >
            {isCopied && (
              <Icons.Check className='h-3 w-3 stroke-[3px] mix-blend-difference invert' />
            )}
          </button>
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Content
          className='radix-side-top:animate-slide-down-fade radix-side-right:animate-slide-left-fade radix-side-bottom:animate-slide-up-fade radix-side-left:animate-slide-right-fade left-4 inline-flex items-center rounded bg-white px-2 py-1 shadow-[0_0.125rem_0.375rem_rgba(0,0,0,0.1),_0_0.5rem_1rem_rgba(0,0,0,0.08)] dark:bg-black'
          sideOffset={4}
        >
          <TooltipPrimitive.Arrow className='fill-white dark:fill-black' />
          <span className='block text-xs'>{color}</span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Color;

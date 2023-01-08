import { useState } from 'react';

import type { Theme } from '~/types';
import { applyTheme, copyToClipboard } from '~/utils';
import { Icons } from '~/components';

interface GetThemeButtonProps {
  name: Theme['name'];
  cookie: Theme['cookie'];
}

const GetThemeButton = ({ name, cookie }: GetThemeButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    copyToClipboard(applyTheme.replace('COOKIE', cookie).replace('NAME', name));
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <button
      className={`ghost-button hidden items-center text-sm sm:flex ${
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
  );
};

export default GetThemeButton;

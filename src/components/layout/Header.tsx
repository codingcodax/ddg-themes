import Link from 'next/link';
import Image from 'next/image';
import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';

const Header = () => {
  const prefersColorScheme = usePrefersColorScheme({ ssr: true });
  const isDarkMode = prefersColorScheme === 'dark';

  return (
    <header className='px-4 pt-2 md:px-10 md:pt-8 lg:px-16'>
      <Link href='/'>
        <Image
          alt='duck duck go themes logo'
          className='lg:hidden'
          height={32}
          src={`/images/${isDarkMode ? 'logo-dark' : 'logo-light'}.svg`}
          width={158}
        />
        <Image
          alt='duck duck go themes logo'
          className='hidden lg:inline-block'
          height={32}
          src={`/images/${
            isDarkMode ? 'logo-desktop-dark' : 'logo-desktop-light'
          }.svg`}
          width={158}
        />
      </Link>
    </header>
  );
};

export default Header;

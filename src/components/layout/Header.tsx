import Link from 'next/link';
import Image from 'next/image';
import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';

const Header = () => {
  const prefersColorScheme = usePrefersColorScheme({ ssr: true });
  const isDarkMode = prefersColorScheme === 'dark';

  console.log(prefersColorScheme);

  return (
    <header className='px-4 pt-2 md:px-10 md:pt-8 lg:px-16'>
      <Link href='/'>
        <Image
          alt='duck duck go themes logo'
          height={32}
          src={`/images/${isDarkMode ? 'logo-dark' : 'logo-light'}.svg`}
          width={158}
        />
      </Link>
    </header>
  );
};

export default Header;

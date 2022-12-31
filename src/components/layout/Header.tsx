import Link from 'next/link';
import Image from 'next/image';
import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';

const Header = () => {
  const prefersColorScheme = usePrefersColorScheme({ ssr: true });
  const isDarkMode = prefersColorScheme === 'dark';

  console.log(prefersColorScheme);

  return (
    <header className='py-2 px-4'>
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

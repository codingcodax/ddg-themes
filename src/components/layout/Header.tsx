import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='py-2 px-4'>
      <Link href='/'>
        <Image
          alt='duck duck go themes logo'
          height={32}
          src='/images/logo.svg'
          width={158}
        />
      </Link>
    </header>
  );
};

export default Header;

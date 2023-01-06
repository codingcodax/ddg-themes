import type { Icon } from '~/types';

const NavRightArrow = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      color='currentColor'
      fill='none'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m15 6-6 6 6 6'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default NavRightArrow;

import type { Icon } from '~/types';

const OpenNewWindow = ({ className }: Icon) => {
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
        d='M21 3h-6m6 0-9 9m9-9v6'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6'
        stroke='currentColor'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default OpenNewWindow;

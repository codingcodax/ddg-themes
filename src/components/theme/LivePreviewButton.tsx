import type { Theme } from '~/types';
import { Icons } from '~/components';

interface LivePreviewButtonProps {
  cookie: Theme['cookie'];
}

const LivePreviewButton = ({ cookie }: LivePreviewButtonProps) => {
  return (
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
  );
};

export default LivePreviewButton;

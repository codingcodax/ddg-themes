import type { Theme as ThemeType } from '~/types';

type ThemeProps = ThemeType;

const Theme = ({ name, screenshot, cookie, palette }: ThemeProps) => {
  return (
    <li className='grid overflow-clip rounded-lg bg-white dark:bg-violet-70'>
      <div className='aspect-video bg-white' />
      <div className='p-4'>
        <div className='flex justify-between'>
          <h4 className='font-bold'>{name}</h4>
          <a
            className='primary-link'
            href={`https://duckduckgo.com/?k${cookie.split('; ').join('&k')}`}
            rel='noopener noreferrer'
            target='_blank'
          >
            Live Preview
          </a>
        </div>
        <div className='mt-1 flex items-center space-x-2'>
          <p className='mr-1'>Color Palette:</p>
          {palette.map((color) => (
            <span
              key={color}
              className={`inline-block h-4 w-4 rounded-sm border`}
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Theme;

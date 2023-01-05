import type { Theme } from '~/types';

interface ColorsProps {
  palette: Theme['palette'];
}

const Colors = ({ palette }: ColorsProps) => {
  return (
    <div className='flex items-center space-x-1'>
      {palette.map((color) => (
        <span
          key={color}
          className={`inline-block h-4 w-4 rounded-sm border`}
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  );
};

export default Colors;

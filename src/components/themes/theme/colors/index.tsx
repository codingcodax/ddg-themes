import type { Theme } from '~/types';

import Color from './Color';

interface ColorsProps {
  palette: Theme['palette'];
}

const Colors = ({ palette }: ColorsProps) => {
  return (
    <div className='grid grid-flow-col items-center gap-x-1.5 sm:gap-x-1'>
      {palette.map((color) => (
        <Color key={color.name} color={color} />
      ))}
    </div>
  );
};

export default Colors;

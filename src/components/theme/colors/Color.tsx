import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface ColorProps {
  color: string;
}

const Color = ({ color }: ColorProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span
            key={color}
            className={`inline-block h-4 w-4 rounded border`}
            style={{ backgroundColor: color }}
          />
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Content
          className='radix-side-top:animate-slide-down-fade radix-side-right:animate-slide-left-fade radix-side-bottom:animate-slide-up-fade radix-side-left:animate-slide-right-fade left-4 inline-flex items-center rounded bg-white px-2 py-1 dark:bg-black'
          sideOffset={4}
        >
          <TooltipPrimitive.Arrow className='fill-black' />
          <span className='block text-xs'>{color}</span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Color;

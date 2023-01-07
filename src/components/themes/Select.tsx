import * as SelectPrimitive from '@radix-ui/react-select';

import { Icons } from '~/components';

interface SelectProps {
  value: SelectPrimitive.SelectProps['value'];
  onValueChange: SelectPrimitive.SelectProps['onValueChange'];
}

const Select = ({ value, onValueChange }: SelectProps) => {
  return (
    <SelectPrimitive.Root
      // defaultValue='all'
      value={value}
      onValueChange={onValueChange}
    >
      <SelectPrimitive.Trigger asChild aria-label='Theme'>
        <button className='primary-button w-32'>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className='ml-2'>
            <Icons.NavArrowDown className='h-4 w-4' />
          </SelectPrimitive.Icon>
        </button>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content className='z-10 overflow-hidden rounded-lg bg-white shadow-[0_0.125rem_0.375rem_rgba(0,0,0,0.1),_0_0.5rem_1rem_rgba(0,0,0,0.08)] dark:bg-violet-70'>
        <SelectPrimitive.ScrollUpButton className='flex items-center justify-center'>
          <Icons.NavArrowUp className='h-4 w-4' />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport className='p-1'>
          <SelectPrimitive.Group>
            {['All', 'Light', 'Dark'].map((f, i) => (
              <SelectPrimitive.Item
                key={`${f}-${i}`}
                className='relative flex w-32 cursor-pointer select-none items-center rounded-md px-8 py-2 text-sm font-medium focus:bg-black/5 focus:outline-none radix-disabled:opacity-50 dark:focus:bg-white/10'
                value={f.toLowerCase()}
                onClick={() => console.log('value')}
              >
                <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
                  <Icons.Check className='mr-4 h-4 w-4' />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className='flex items-center justify-center'>
          <Icons.NavArrowDown className='h-4 w-4' />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export default Select;

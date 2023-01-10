import Image from 'next/image';
import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';

interface StepProps {
  number: number;
  image: string;
  alt: string;
  height: number;
  width: number;
  title: string;
  description: string;
}

const Step = ({
  number,
  image,
  alt,
  height,
  width,
  title,
  description,
}: StepProps) => {
  const prefersColorScheme = usePrefersColorScheme({ ssr: true });
  const isDarkMode = prefersColorScheme === 'dark';

  return (
    <li className='relative rounded-lg bg-gray-10 px-5 pt-5 pb-8 text-center dark:bg-violet-70'>
      <span className='absolute flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#111]'>
        {number}
      </span>

      <Image
        alt={alt}
        className='mb-4 aspect-video h-[100px]'
        height={height}
        src={`/images/${isDarkMode ? `${image}-dark` : image}.svg`}
        width={width}
      />

      <h4 className='text-xl font-bold'>{title}</h4>
      <p>{description}</p>
    </li>
  );
};

export default Step;

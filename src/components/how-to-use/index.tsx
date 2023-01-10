import { Steps } from '~/data';

import Step from './Step';

const HowToUse = () => {
  return (
    <section
      className='mx-auto mt-16 w-full max-w-screen-lg px-4 md:px-8 lg:px-16'
      id='howToUse'
    >
      <h2 className='mb-4 scroll-m-8 text-center md:mb-6 md:text-left'>
        How To Use
      </h2>

      <ul className='grid gap-8 px-4 sm:grid-cols-2 min-[760px]:grid-cols-3 md:px-0'>
        {Steps.map((step) => (
          <Step key={step.number} {...step} />
        ))}
      </ul>
    </section>
  );
};

export default HowToUse;

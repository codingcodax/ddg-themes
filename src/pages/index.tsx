import { type NextPage } from 'next';

import { Seo, Hero, Themes, HowToUse } from '~/components';

const Home: NextPage = () => {
  return (
    <div>
      <Seo />

      <Hero />

      <Themes />

      <HowToUse />
    </div>
  );
};

export default Home;

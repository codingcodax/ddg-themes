import { type NextPage } from 'next';

import { Seo, Hero, Themes } from '~/components';

const Home: NextPage = () => {
  return (
    <div>
      <Seo />

      <Hero />

      <Themes />
    </div>
  );
};

export default Home;

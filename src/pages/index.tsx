import { type NextPage } from 'next';

import { Hero, Themes } from '~/components';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />

      <Themes />
    </div>
  );
};

export default Home;

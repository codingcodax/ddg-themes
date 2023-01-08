import type Color from './color';

type Theme = {
  name: string;
  cookie: string;
  palette: Color[];
  type: 'dark' | 'light';
};

export default Theme;

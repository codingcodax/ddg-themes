import type { Theme } from '~/types';

const githubLight: Theme = {
  name: 'GitHub Light',
  cookie:
    '7=ffffff; j=ffffff; 9=0d1117; aa=57606a; 8=24292f; x=0969da; 21=f4f6f7;',
  palette: [
    { name: 'Background and Header', hexCode: '#ffffff' },
    { name: 'Title', hexCode: '#0d1117' },
    { name: 'Visited Title', hexCode: '#57606a' },
    { name: 'Snippet', hexCode: '#24292f' },
    { name: 'URL', hexCode: '#0969da' },
    { name: 'Hover, Module and Dropdown', hexCode: '#f4f6f7' },
  ],
  type: 'dark',
};

export default githubLight;

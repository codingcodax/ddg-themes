import type { Theme } from '~/types';

const githubDark: Theme = {
  name: 'GitHub Dark',
  cookie:
    '7=0d1117; j=0d1117; 9=ffffff; aa=8b949e; 8=c9d1d9; x=58a6ff; 21=161b22;',
  palette: [
    { name: 'Background and Header', hexCode: '#0d1117' },
    { name: 'Title', hexCode: '#ffffff' },
    { name: 'Visited Title', hexCode: '#8b949e' },
    { name: 'Snippet', hexCode: '#c9d1d9' },
    { name: 'URL', hexCode: '#58a6ff' },
    { name: 'Hover, Module and Dropdown', hexCode: '#161b22' },
  ],
  type: 'dark',
};

export default githubDark;

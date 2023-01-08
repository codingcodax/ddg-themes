import type { Theme } from '~/types';

const dracula: Theme = {
  name: 'Dracula',
  cookie:
    '7=282a36; j=282a36; 9=50fa7b; aa=bd93f9; 8=f8f8f2; x=f1fa8c; 21=44475a;',
  palette: [
    { name: 'Background and Header', hexCode: '#282a36' },
    { name: 'Title', hexCode: '#50fa7b' },
    { name: 'Visited Title', hexCode: '#bd93f9' },
    { name: 'Snippet', hexCode: '#f8f8f2' },
    { name: 'URL', hexCode: '#f1fa8c' },
    { name: 'Hover, Module and Dropdown', hexCode: '#44475a' },
  ],
  type: 'dark',
};

export default dracula;

import type { Theme } from '~/types';

const nord: Theme = {
  name: 'Nord',
  cookie:
    '7=2e3440; j=2e3440; 9=88c0d0; 8=8fbcbb; aa=d8dee9; x=b48ead; 21=3b4252;',
  palette: [
    { name: 'Background and Header', hexCode: '#2e3440' },
    { name: 'Title', hexCode: '#88c0d0' },
    { name: 'Visited Title', hexCode: '#8fbcbb' },
    { name: 'Snippet', hexCode: '#d8dee9' },
    { name: 'URL', hexCode: '#b48ead' },
    { name: 'Hover, Module and Dropdown', hexCode: '#3b4252' },
  ],
  type: 'dark',
};

export default nord;

import type { Theme } from '~/types';

const neon: Theme = {
  name: 'Neon',
  cookie:
    // '7=101116; j=070709; 9=00ff2b; aa=0cbd2b; 8=d1d1d1; x=fffc58; 21=118b25; ',
    '7=261d49; j=2a1f48; 9=df95ff; aa=9254b5; 8=1bccfd; x=21f6bc 21=2a1f48;',
  palette: [
    { name: 'Background and Header', hexCode: '#261d49' },
    { name: 'Title', hexCode: '#2a1f48' },
    { name: 'Visited Title', hexCode: '#df95ff' },
    { name: 'Snippet', hexCode: '#9254b5' },
    { name: 'URL', hexCode: '#1bccfd' },
    { name: 'Hover, Module and Dropdown', hexCode: '#21f6bc' },
  ],
  type: 'dark',
};

export default neon;

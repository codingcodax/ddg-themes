import Head from 'next/head';

const Seo = () => {
  return (
    <Head>
      <title>DuckDuckGo Themes</title>
      <meta
        content='Customize DuckDuckGo with your favorite theme, choose from a number of themes and install it.'
        name='description'
      />

      <meta content='DuckDuckGo Themes' property='og:title' />
      <meta
        content='Customize DuckDuckGo with your favorite theme, choose from a number of themes and install it.'
        property='og:description'
      />
      <meta content='https://themes.codingcodax.dev' property='og:url' />
      <meta content='website' property='og:type' />
      <meta
        content='https://themes.codingcodax.dev/og.jpg'
        property='og:image'
      />
      <meta content='DuckDuckGo Themes og' property='og:image:alt' />
      <meta content='1200' property='og:image:width' />
      <meta content='675' property='og:image:height' />
      <meta content='en_IE' property='og:locale' />
      <meta content='DuckDuckGo Themes' property='og:site_name' />

      <meta content='summary_large_image' name='twitter:card' />
      <meta content='@codingcodax' name='twitter:site' />
      <meta content='@codingcodax' name='twitter:creator' />
      <meta content='DuckDuckGo Themes' name='twitter:title' />
      <meta content='https://themes.codingcodax.dev' property='twitter:url' />
      <meta
        content='https://themes.codingcodax.dev/og.jpg'
        name='twitter:image'
      />

      <meta content='#de5833' name='msapplication-TileColor' />
      <meta content='#de5833' name='theme-color' />
      <meta content='/favicons/browserconfig.xml' name='msapplication-config' />

      <link href='https://themes.codingcodax.dev' rel='canonical' />
      <link
        href='/favicons/apple-touch-icon.png'
        rel='apple-touch-icon'
        sizes='180x180'
      />
      <link
        href='/favicons/favicon-32x32.png'
        rel='icon'
        sizes='32x32'
        type='image/png'
      />
      <link
        href='/favicons/favicon-16x16.png'
        rel='icon'
        sizes='16x16'
        type='image/png'
      />
      <link href='/favicons/favicon.ico' rel='icon' />
      <link href='/favicons/site.manifest' rel='manifest' />
      <link
        color='#de5833'
        href='/favicons/safari-pinned-tab.svg'
        rel='mask-icon'
      />
    </Head>
  );
};

export default Seo;

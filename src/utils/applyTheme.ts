const applyTheme = `// Cookies string for your theme
const cookie = 'COOKIE';

// Converts cookie string into formatted JSON
const cookieToJSON = (cookieRaw) => {
  const cookieJson = {};
  const items = cookieRaw.split(/[ ,]+/);

  items.forEach((item) => {
    const parts = item.split('=');
    cookieJson[parts[0]] = parts[1];
  });

  return cookieJson;
};

// Iterates over JSON, and adds to browser cookie store
const setCookies = (cookieJson) => {
  Object.keys(cookieJson).forEach((key) => {
    document.cookie = \`$\{key}=$\{cookieJson[key]}\`;
  });
};

alert('The NAME theme will be applied.');

// Call set cookies, passing in formated cookie data
setCookies(cookieToJSON(cookie));

// All done, reload page for changes to take effect :)
location.reload();`;

export default applyTheme;

import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openAuthSessionAsync('https://example.com');
  console.log(result);
}

// ...rest of the component
// ... other imports
import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = null;
  try {
    result = await Promise.race([
      WebBrowser.openAuthSessionAsync('https://example.com'),
      new Promise((_, reject) =>
        setTimeout(() => reject('Timeout'), 15000) // Timeout after 15 seconds
      ),
    ]);
  } catch (error) {
    console.error('Authentication failed or timed out:', error);
    // Handle the error appropriately (e.g., show an error message to the user)
  } finally {
    console.log('Result:', result);
  }
}

// ... rest of the component
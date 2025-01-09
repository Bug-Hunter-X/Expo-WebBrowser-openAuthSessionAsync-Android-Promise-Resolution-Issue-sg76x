# Expo WebBrowser.openAuthSessionAsync Android Issue

This repository demonstrates a problem with `expo-web-browser`'s `openAuthSessionAsync` function on Android.  The function sometimes fails to resolve its promise, even though the browser opens and the authentication process completes successfully in the browser.  The issue is intermittent and hard to reproduce reliably.

## Steps to Reproduce

1. Run the app on an Android device or emulator.
2. Trigger the `handlePress` function (which calls `openAuthSessionAsync`).
3. Observe that the browser opens.  Sometimes, the promise resolves with the expected result. Other times, it hangs indefinitely. 

## Solution

The solution involves adding a timeout to the promise and handling the case where the promise does not resolve within that timeframe.  This workaround assumes that if the authentication process takes too long, it's likely failed.
# Daily Calories — personal iPhone web app

This app is designed to run without accounts, ads, analytics, or third-party services. Calorie entries are stored in the browser's local storage on the device. The included service worker caches the app shell for offline use after the first successful visit.

## Install on iPhone
1. Put these files on a static HTTPS host you control. A free option is GitHub Pages; the website files will be publicly accessible, but the calorie data is stored in each browser and is not sent to GitHub or a server.
2. Open the hosted URL in Safari on your iPhone.
3. Tap Share, then **Add to Home Screen**. If offered, enable **Open as Web App**, then tap Add.
4. Open the Home Screen icon once while online. After that, the app shell should be available offline.

## Important
- Data is stored locally in Safari/web-app storage. Clearing website data, removing browser data, or changing devices can erase it. Use **Backup data** regularly and keep the JSON backup somewhere safe.
- The app uses the iPhone's local calendar date. The new date starts at zero automatically; past totals and entries remain in history.
- This is a simple calorie arithmetic log, not medical or dietary advice.
- No native App Store listing or paid developer account is required for this web app.

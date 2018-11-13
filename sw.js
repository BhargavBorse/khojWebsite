importScripts("https://cdn.pushalert.co/sw-7512.js");


		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('sw.js')
				.then(registration => {
					console.log('Service Worker is registered', registration);
				})
				.catch(err => {
					console.error('Registration failed:', err);
				});
			});
		}


self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activating...');
  });

  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
  });
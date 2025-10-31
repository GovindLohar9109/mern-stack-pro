navigator.serviceWorker
  .register(`${process.env.PUBLIC_URL}/service-worker.js`)
  .then((registration) => {
    console.log('Service Worker registered: ', registration);
  })
  .catch((error) => {
    console.log('Service Worker registration failed: ', error);
  });

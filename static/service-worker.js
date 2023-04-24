importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");

// workbox.setConfig({ debug: true });

// const revision = Math.floor(100000 + Math.random() * 900000);

// workbox.precaching.precacheAndRoute([
//   { url: "/fonts/Open-Sans-Bold.woff2", revision: revision },
//   { url: "/fonts/Open-Sans-Regular.woff2", revision: revision }
//   { url: "/img/logo.webp", revision: revision },
//   { url: "/img/hero.jpg", revision: revision },
// ]);

workbox.routing.registerRoute( 
  /\.(?:woff|woff2)$/, 
  new workbox.strategies.CacheFirst({ 
    cacheName: "fonts", 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 20, 
        maxAgeSeconds: 60 * 60 * 24 * 30, 
      }), 
    ], 
  }) 
);

workbox.routing.registerRoute( 
  /\.(?:js|css)$/, 
  new workbox.strategies.StaleWhileRevalidate({ 
    cacheName: "assets", 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 20, 
        maxAgeSeconds: 60 * 60 * 24, 
      }), 
    ], 
  }) 
);

workbox.routing.registerRoute( 
  /\.(?:png|jpg|jpeg|gif|avif|webp|svg)$/, 
  new workbox.strategies.CacheFirst({ 
    cacheName: "images", 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 1000, 
        maxAgeSeconds: 1800, 
      }), 
    ], 
  }) 
);

/* 
workbox.routing.registerRoute( 
  /(\/|\.html)$/, 
  new workbox.strategies.NetworkFirst({ 
    cacheName: "html", 
    plugins: [ 
      new workbox.expiration.ExpirationPlugin({ 
        maxEntries: 20, 
        // maxAgeSeconds: 60 * 60 * 24 * 30, 
      }) 
    ] 
  }) 
); 
*/
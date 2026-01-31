const CACHE_NAME = 'muhasaba-v1';
const ASSETS = [
  './',
  './index.html',
  './icon.png'
];

// ইনস্টল হওয়ার সময় ফাইলগুলো ক্যাশ (Cache) করে রাখা
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// অফলাইনে থাকার সময় ক্যাশ থেকে ফাইল দেখানো
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
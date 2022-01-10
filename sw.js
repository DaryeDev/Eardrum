self.addEventListener("install", e => {
    // console.log("installing...");
    // e.waitUntil(
    //     caches.open("static").then(cache => {
    //         return cache.addAll(["./", "./index.html", "./index.php", "./src/master.css", "./src/index.js", "./images/logo192.png"]);
    //     })
    // );
});

// self.addEventListener("fetch", e => {
//     try {
//         caches.open("static").then(cache => {
//             return cache.addAll(["./", "./index.html", "./index.php", "./src/master.css", "./src/index.js", "./images/logo192.png"]);
//         })
//     } catch (error) {}
//     console.log(e);
//     e.respondWith(
//         caches.match(e.request).then(response => {
//             return response || fetch(e.request);
//         })
//     );
// });
self.addEventListener('install',function (event){
    event.waitUntil(
        caches.open(myCache)
        .then(cache =>
            cache.addAll(
                [
                    'index.html',
                    'restaurant.html',
                    'css/main-styles.css',
                    'resturant-styles',
                    'js/dbhelper.js',
                    'js/main.js',
                    'js/restaurant_info.js',
                    'data/restaurants.json',
                    'img/1.jpg',
                    'img/2.jpg',
                    'img/3.jpg',
                    'img/4.jpg',
                    'img/5.jpg',
                    'img/6.jpg',
                    'img/7.jpg',
                    'img/8.jpg',
                    'img/9.jpg',
                    'img/10.jpg'
                ]
            )
        )
    );
});

self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request).then(response =>{
            if (response) {return response;}
            return fetch (event.request)
        })
    );

});

self.addEventListener("activate",function(event){
event.waitUntil(
    caches.keys().then(cacheNames =>{
        return Promise.all(
            chachNames.map(chachName =>{
                if (cacheName !=myCache){
                    return chaches.delete(chachName);
                }
            })
        );
    })
);

})
"use strict";var precacheConfig=[["/wishup/index.html","4d6d912075f5cff51e01a77217bb224f"],["/wishup/static/css/main.03ac78a3.css","3dd37281056b2b1f20147128ec1b68d6"],["/wishup/static/js/main.30ea2708.js","391256eeeb88315bc7c681c05b43ec9b"],["/wishup/static/media/VA.4cd0e53b.png","4cd0e53bcb4d22723a9752ac6091e401"],["/wishup/static/media/business-world.977483b5.png","977483b561b8cacdadc042e8727ae2ac"],["/wishup/static/media/cover.f131a81b.png","f131a81b9c95ba83ebf93ebe4d074421"],["/wishup/static/media/economic-times.6f4f06b9.png","6f4f06b98bf6889a204cf06761ccfe94"],["/wishup/static/media/logo.081e7743.png","081e7743eef8695b033cdaf4fbfae7ac"],["/wishup/static/media/moneycontrol.58918c04.png","58918c045f0a25a52601400de74d15d1"],["/wishup/static/media/team.e7f6d323.png","e7f6d32362c5213be84f776890f21395"],["/wishup/static/media/telegraph.6fc0e8da.png","6fc0e8dae43a862facedfd3686d232ae"],["/wishup/static/media/thinking.01580d73.png","01580d73adad6a75e8d3106f0c7ab11d"],["/wishup/static/media/userr.f86134bb.png","f86134bbc26b02f0134a6603a6db3bcb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/wishup/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
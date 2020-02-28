'use strict';

(function (){
    window.backend = {
        download: function (onError, onLoad) {
            var downloadUrl = 'https://js.dump.academy/code-and-magick/data';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.open('GET', downloadUrl);

            xhr.addEventListener('load', function () {
                onLoad(xhr.response);
                console.log(xhr.response);
            });

            xhr.send();
        },
        save: function () {
            var uploadUrl = 'https://js.dump.academy/code-and-magick';
        }
    };
})();
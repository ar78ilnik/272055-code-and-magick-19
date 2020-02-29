'use strict';

(function () {
  window.backend = {
    download: function (onError, onLoad) {
      var statusCode = {
        OK: 200
      };
      var TIMEOUT_IN_MS = 5000;
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');

      xhr.addEventListener('load', function () {
        if (xhr.status === statusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS;
      xhr.send();
    },
    save: function (data, onSuccess) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onSuccess(xhr.response);
      });

      xhr.open('POST', 'https://js.dump.academy/code-and-magick');
      xhr.send(data);
    }
  };
})();

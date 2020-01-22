'use strict';
var MIN = 128;
var MAX = 255;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;

var POSITION_NAME_X = 100;
var POSITION_NAME_Y = 260;
var FONT_GAP = 100;

var POSITION_TIME_X = POSITION_NAME_X;
var POSITION_TIME_Y = POSITION_NAME_Y;

var POSITION_RECT_X = 100;
var POSITION_RECT_Y = 240;
var RECT_WIDTH = 40;
var RECT_HEIGHT = -150;

var STAT_GAP = 40;

// Функция рисования облака и тени
var renderCloud = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH + GAP, CLOUD_HEIGHT + GAP);
  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 180, 40);
  ctx.fillText('Список результатов:', 180, 56);
};

// Функция поиска случайного числа для отрисовки цвета столбца
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Функция поиска максимального элемента массива
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// Функция генерирования статистики
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);

  var positionNameX = POSITION_NAME_X;
  var positionNameY = POSITION_NAME_Y;
  var positionTimeX = POSITION_TIME_X;
  var positionTimeY = POSITION_TIME_Y;
  var positionRectX = POSITION_RECT_X;

  //Функция поиска максимального элемента массива времен
  var maxTime = getMaxElement(times);
  maxTime = Math.floor(maxTime);

  //Округления времен
  for (var i = 0; i < times.length; i++) {
    times[i] = Math.floor(times[i]);
  }

  // Цикл вывода статистики
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
      POSITION_NAME_X = 130;
      POSITION_NAME_Y = 260;
    } else {
      ctx.fillStyle = 'rgb(0, 0,' + getRandomNumber(MIN, MAX) + ')';
    }

    ctx.fillRect(positionRectX += STAT_GAP * 2, POSITION_RECT_Y, STAT_GAP, ((RECT_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], positionNameX += STAT_GAP * 2, positionNameY);
    ctx.fillText(times[i], positionTimeX += STAT_GAP * 2, 230 + ((RECT_HEIGHT * times[i]) / maxTime));
  }
};

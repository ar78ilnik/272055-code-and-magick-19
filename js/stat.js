'use strict';
var MIN = 128;
var MAX = 255;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;

var POSITION_NAME_X = 130;
var POSITION_NAME_Y = 260;
var FONT_GAP = 100;

var POSITION_RECT_X = 100;
var POSITION_RECT_Y = 240;
var RECT_WIDTH = 40;
var RECT_HEIGHT = -150;

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
var color = function (min, max) {
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
  var positionRectX = POSITION_RECT_X;

  //Функция поиска максимального элемента массива времен
  var maxTime = getMaxElement(times);
  maxTime = Math.floor(maxTime);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], positionNameX, positionNameY);
    ctx.fillText(Math.round(times[i]), positionNameX, positionNameY + times[i]);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
      POSITION_NAME_X = 130;
      POSITION_NAME_Y = 260;
    } else {
      ctx.fillStyle = 'rgb(0, 0,' + color(MIN, MAX) + ')';
    }

    ctx.fillText(names[i], positionNameX += 80, positionNameY);
    ctx.fillRect(positionRectX += 80, POSITION_RECT_Y, 40, ((RECT_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = 'black';

    /*ctx.fillText('Вы', POSITION_NAME_X, POSITION_NAME_Y);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(POSITION_RECT_X, POSITION_RECT_Y, RECT_WIDTH, -150);

    ctx.fillStyle = '#000';
    ctx.fillText('Кекс', POSITION_NAME_X + FONT_GAP, POSITION_NAME_Y);
    ctx.fillRect(POSITION_RECT_X + FONT_GAP, POSITION_RECT_Y, RECT_WIDTH, -150);

    ctx.fillText('Катя', POSITION_NAME_X + FONT_GAP * 2, POSITION_NAME_Y);
    ctx.fillRect(POSITION_RECT_X + FONT_GAP * 2, POSITION_RECT_Y, RECT_WIDTH, -150);

    ctx.fillText('Игорь', POSITION_NAME_X + FONT_GAP * 3, POSITION_NAME_Y);
    ctx.fillRect(POSITION_RECT_X + FONT_GAP * 3, POSITION_RECT_Y, RECT_WIDTH, -150);
  }*/
  }
};

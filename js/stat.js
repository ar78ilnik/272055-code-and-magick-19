'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var FONT_X = 130;
var FONT_Y = 260;
var FONT_GAP = 100;
var RECT_X = 130;
var RECT_Y = 240;
var RECT_WIDTH = 40;
var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTimes = function (gamers) {
  var times = [];
  for (var i = 0; i < gamers.length; i++) {
    var h = Math.random();
    times[i] += h;
    console.log(times[i]);
  }
  return times;
};

renderTimes(players);

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура, вы победили!', FONT_X, 40);
  ctx.fillText('Список результатов:', FONT_X, 60);

  ctx.fillText('Вы', FONT_X, FONT_Y);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(RECT_X, RECT_Y, RECT_WIDTH, -150);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', FONT_X + FONT_GAP, FONT_Y);
  ctx.fillRect(RECT_X + FONT_GAP, RECT_Y, RECT_WIDTH, -150);

  ctx.fillText('Катя', FONT_X + FONT_GAP * 2, FONT_Y);
  ctx.fillRect(RECT_X + FONT_GAP * 2, RECT_Y, RECT_WIDTH, -150);

  ctx.fillText('Игорь', FONT_X + FONT_GAP * 3, FONT_Y);
  ctx.fillRect(RECT_X + FONT_GAP * 3, RECT_Y, RECT_WIDTH, -150);
};

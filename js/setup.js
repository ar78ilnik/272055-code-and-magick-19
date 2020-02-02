'use strict';

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLOR = [
  'rgb (101, 137, 164)',
  'rgb (241, 43, 107)',
  'rgb (146, 100, 161)',
  'rgb (56, 159, 117)',
  'rgb (215, 210, 55)',
  'rgb (0, 0, 0)'
];
var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

// Открываем окно с персонажами
var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('.hidden');

// Функция поиска случайного числа из массивов разной длины
var getRandomValues = function (values) {
  var index = Math.floor(Math.random() * values.length);
  return values[index];
};

// Функция генерирования массива магов
var createWizards = function (wizardCount) {
  var wizards = [];
  for (var i = 0; i < wizardCount; i++) {
    var wizard = {
      name: getRandomValues(NAMES) + ' ' + getRandomValues(SURNAMES),
      coatColor: getRandomValues(COAT_COLOR),
      eyesColor: getRandomValues(EYES_COLOR)
    };
    wizards.push(wizard);
  }
  return wizards;
};

// Генерируем 4 мага
var wizards = createWizards(4);

// Копируем содержимое шаблона
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Функция создания DOM-элемента на основе JS-объекта
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

// Функция заполнения блока DOM-элементами на основе массива JS-объектов
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

// Отрисовка 4-х персонажей
similarListElement.appendChild(fragment);

// 4. Обработка событий
// Открытие окна настройки персонажа
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupPlayer = setup.querySelector('.setup-player');

var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function (evt) {
  evt.target.setAttribute('style', 'fill:' + getRandomValues(COAT_COLOR));
});

wizardEyes.addEventListener('click', function (evt) {
  evt.target.setAttribute('style', 'fill:' + getRandomValues(EYES_COLOR));
});

wizardFireball.addEventListener('click', function (evt) {
  evt.target.setAttribute('style', 'fill:' + getRandomValues(FIREBALL_COLOR));
});

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});


'use restrict';

const words = [
  'car',
  'plane',
  'door',
  'sky',
  'ball',
  'book',
  'phone',
  'keyboard',
];

let word = words[Math.floor(Math.random() * words.length)];

const answerArray = [];
let guess = '';
let guesses = 10;

for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

console.log(answerArray);

let remainigLetters = word.length;

console.log(remainigLetters);

while (remainigLetters > 0 && guesses > 0) {
  alert(`Внимание! \nПеред вами загаданое слово.  \n ${answerArray.join(' ')}`);
  guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры');

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста введите одиночну. букву');
  } else guesses--;
  console.log(guesses);
  guess = guess.toLowerCase();
  for (j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === '_') {
      answerArray[j] = guess;
      remainigLetters--;
      console.log(remainigLetters);
    }
  }
}

if (guesses > 0) {
  alert('Отлично! Было загадано ' + word);
} else {
  alert('Плохо! Было загадано ' + word);
}

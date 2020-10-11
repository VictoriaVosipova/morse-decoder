const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  console.log(expr);
  let encodedLetters = [];

  for (let i = 0; i < expr.length / 10; i++) {

    encodedLetters.push(expr.slice(i * 10, i * 10 + 10));

  }

  let str;

  for (let i = 0; i < encodedLetters.length; i++) {
    if (encodedLetters[i] === '**********') {
      encodedLetters[i] = ' ';
    } else {
      str = '';
      for (let j = 0; j < 5; j++) {
        if (encodedLetters[i].slice(j * 2, j * 2 + 2) === '10') {
          str += '.'
        }
        if (encodedLetters[i].slice(j * 2, j * 2 + 2) === '11') {
          str += '-'
        }


      }
      encodedLetters[i] = str;

    }

  }


  for (let i = 0; i < encodedLetters.length; i++) {
    if (encodedLetters[i] === ' ') {
      encodedLetters[i] === ' ';
    } else {
      encodedLetters[i] = MORSE_TABLE[encodedLetters[i]];
    }
  }

  return encodedLetters.join('');
}

module.exports = {
  decode
}
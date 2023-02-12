const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let codeMorse;
    let codeBinary;

    for (let i = 0; i < expr.length; i += 10) {
      codeBinary = expr.slice(i, i + 10);
      if (codeBinary == '**********') {
        result += ' ';
        continue;
      }

      codeMorse = '';
      for (let j = 0; j < codeBinary.length; j+=2) {
        if (codeBinary.slice(j, j+2) == '10') codeMorse += '.';
        if (codeBinary.slice(j, j+2) == '11') codeMorse += '-';
      }
        
      result += MORSE_TABLE[codeMorse];
    }

    return result;
}

module.exports = {
    decode
}
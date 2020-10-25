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

const Simple_Alphabet = {
    '.':     '10',
    '-':   '11',
};

function decode(expr) {

    let words  = expr.split('**********');
    let splittedWords = [];
    let characters = [];
    words.forEach(element => {

        let word = [];
        while(element.length>=10)
        {

            let character = element.slice(element.length-10);
            element = element.substring(0,element.length-10);
            word.push(character);
        }
        if(element!= '')
            word.push(element);

        splittedWords.push(word);
    });
    let morseString = '';
    splittedWords.forEach(word=>{
        word.forEach(symbol=>{
            morseString+=(symbol.replace(/11/g,'-').replace(/10/g,'.'));
            morseString+=' '
        })
        morseString+= '   ';
    })
    
    morseString = morseString.replace(/00/g,'');

    
    let semFinal = [];

    morseString.split('   ').forEach(el=>semFinal.push(el.split(' ').reverse().join(' ')));

    let finalString = '';
    
    semFinal.forEach(element => {
        element.split(' ').forEach(el=>{
            if(el!='')
                finalString+=MORSE_TABLE[el];
        })
        finalString+=' ';
    });
return finalString.replace(/\s+/g, ' ').trim();
}

module.exports = {
    decode
}
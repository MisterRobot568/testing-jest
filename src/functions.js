// capitalize function takes a string and returns it with the first word capitalized
function capitalize(word) {
    if (word === undefined || word === null || word === '') {
        throw new Error('Input string is required');
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// reverseString(str) returns the input string reversed
function reverseString(str) {
    if (str === undefined || str === null || str === '') {
        throw new Error('Input string is required');
    }
    return str
        .split('') // split str into array
        .reverse() // reverse array
        .join(''); // join the array back as a string
}
// A calculator object that contains functions for the basic operations: add, subtract, divide,
// and multiply. Each of these functions should take two numbers and return the
// correct calculation.
function calculator(x, y) {
    return {
        add: x + y,
        subtract: x - y,
        multiply: x * y,
        divide: x / y,
    };
}

function caesarCipher(str, shiftFactor) {
    let newStr = '';
    let characters = str.split('');
    // let ascii_factor = 0;
    characters.forEach((letter) => {
        let new_character = determineCipher(letter, shiftFactor);
        console.log(new_character);
        newStr += new_character;
        console.log(newStr);
    });
    return newStr;
}
function determineCipher(character, shift_factor) {
    let ascii_factor = 0;
    let current_ascii = character.charCodeAt(0);
    shift_factor = shift_factor % 26;
    if (current_ascii >= 97 && current_ascii <= 122) {
        ascii_factor = 0;
    } else if (current_ascii >= 65 && current_ascii <= 90) {
        ascii_factor = 1;
    } else {
        return character;
    }
    // check if new ascii is outside of range
    let newAscii = current_ascii + shift_factor;
    if (ascii_factor === 0) {
        if (newAscii < 97) {
            newAscii = newAscii + 26;
        } else if (newAscii > 122) {
            newAscii = newAscii - 26;
        }
    }
    if (ascii_factor === 1) {
        if (newAscii < 65) {
            newAscii = newAscii + 26;
        } else if (newAscii > 90) {
            newAscii = newAscii - 26;
        }
    }
    return String.fromCharCode(newAscii);
}

function analyzeArray(arr) {
    return {
        average: mean(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}
function mean(array) {
    const sum = array.reduce(
        (accumulator, currentVal) => accumulator + currentVal,
        0
    );
    return sum / array.length;
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};

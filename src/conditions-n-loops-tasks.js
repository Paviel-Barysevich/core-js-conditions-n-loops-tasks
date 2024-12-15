/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;

  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) return false;
  if (a === b || a === c || b === c) return true;

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num === 0) return 'use decimal number from 1 to 109';

  const firstDigit = num % 10;
  let roman1 = '';
  const secondDigit = Math.floor(num / 10);
  let roman2 = '';

  switch (firstDigit) {
    case 0:
      roman1 = '';
      break;
    case 1:
      roman1 = 'I';
      break;
    case 2:
      roman1 = 'II';
      break;
    case 3:
      roman1 = 'III';
      break;
    case 4:
      roman1 = 'IV';
      break;
    case 5:
      roman1 = 'V';
      break;
    case 6:
      roman1 = 'VI';
      break;
    case 7:
      roman1 = 'VII';
      break;
    case 8:
      roman1 = 'VIII';
      break;
    case 9:
      roman1 = 'IX';
      break;
    default:
      return 'use decimal number from 1 to 109';
  }

  switch (secondDigit) {
    case 0:
      return roman1;
    case 1:
      roman2 = 'X';
      break;
    case 2:
      roman2 = 'XX';
      break;
    case 3:
      roman2 = 'XXX';
      break;
    case 4:
      roman2 = 'XL';
      break;
    case 5:
      roman2 = 'L';
      break;
    case 6:
      roman2 = 'LX';
      break;
    case 7:
      roman2 = 'LXX';
      break;
    case 8:
      roman2 = 'LXXX';
      break;
    case 9:
      roman2 = 'CX';
      break;
    case 10:
      roman2 = 'C';
      break;
    default:
      return 'use decimal number from 1 to 109';
  }

  return roman2 + roman1;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const sign = numberStr[i];
    let signName = '';

    switch (sign) {
      case '-':
        signName = 'minus';
        break;
      case '1':
        signName = 'one';
        break;
      case '2':
        signName = 'two';
        break;
      case '3':
        signName = 'three';
        break;
      case '4':
        signName = 'four';
        break;
      case '5':
        signName = 'five';
        break;
      case '6':
        signName = 'six';
        break;
      case '7':
        signName = 'seven';
        break;
      case '8':
        signName = 'eight';
        break;
      case '9':
        signName = 'nine';
        break;
      case '0':
        signName = 'zero';
        break;
      case '.':
        signName = 'point';
        break;
      case ',':
        signName = 'point';
        break;
      default:
        signName = '"IDK this sign"';
    }

    if (str !== '') {
      str = `${str} ${signName}`;
    } else {
      str = signName;
    }
  }

  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numString = `${num}`;
  const digitChar = `${digit}`;

  for (let i = 0; i < numString.length; i += 1) {
    if (numString[i] === digitChar) {
      return true;
    }
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balanceNumber = 0;

  for (let i = 1; i < arr.length - 1; i += 1) {
    const curNumber = arr[i];

    for (let j = 0; j < arr.length; j += 1) {
      if (j <= i) {
        balanceNumber += arr[j];
      } else {
        balanceNumber -= arr[j];
      }
    }

    if (curNumber !== balanceNumber) {
      balanceNumber = 0;
    } else {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiralMatrix = new Array(size);
  let count = 1;

  for (let i = 0; i < size; i += 1) {
    spiralMatrix[i] = new Array(size);

    for (let c = 0; c < size; c += 1) {
      spiralMatrix[i][c] = 0;
    }
  }

  let j = 0;
  let k = 0;
  let pathSize = size;
  let right = 0;
  let down = 0;
  let left = 0;
  let up = 0;
  let cycleCount = Math.ceil(size / 2);

  while (cycleCount) {
    for (let i1 = right; i1 < right + pathSize; i1 += 1) {
      k = i1;
      if (spiralMatrix[j][k] === 0) {
        spiralMatrix[j][k] = count;
        count += 1;
      } else {
        break;
      }
    }
    right += 1;

    for (let i2 = down + 1; i2 < down + pathSize; i2 += 1) {
      j = i2;
      if (spiralMatrix[j][k] === 0) {
        spiralMatrix[j][k] = count;
        count += 1;
      } else {
        break;
      }
    }
    down += 1;

    for (let i3 = size - 2 - left; i3 >= left; i3 -= 1) {
      k = i3;
      if (spiralMatrix[j][k] === 0) {
        spiralMatrix[j][k] = count;
        count += 1;
      } else {
        break;
      }
    }
    left += 1;

    for (let i4 = size - 2 - up; i4 >= up; i4 -= 1) {
      j = i4;
      if (spiralMatrix[j][k] === 0) {
        spiralMatrix[j][k] = count;
        count += 1;
      } else {
        j += 1;
        break;
      }
    }
    up += 1;

    pathSize -= 2;
    cycleCount -= 1;
  }

  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const m = JSON.stringify(matrix);
  const clone = JSON.parse(m);
  const copyMatrix = matrix;

  for (let i = 0; i < clone[0].length; i += 1) {
    for (let j = 0; j < clone.length; j += 1) {
      const k = copyMatrix[0].length - 1 - j;

      copyMatrix[i][k] = clone[j][i];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

function deleteAdditional(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result.push(str[i]);
    }
  }
  return result;
}
console.log(deleteAdditional("ABBCDDEFFG"));

function deleteAddition(str) {
  return str.split("").filter(function (letter, index, arr) {
    return letter !== arr[index - 1];
  });
}
console.log(deleteAddition("ABBCDDEFFG"));

function sumTheSmallest(arr) {
  let min1 = Infinity;
  let min2 = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  return min1 + min2;
}
console.log(sumTheSmallest([5, 8, 12, 18, 22]));

function sumTheSmall(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] + arr[1];
}
console.log(sumTheSmall([1, 1, 12, 18, 22]));

function aNotInB(arr1, arr2) {
  return arr1.filter((num) => !arr2.includes(num));
}
console.log(aNotInB([1, 2, 2, 2, 3], [2]));

function aNotInB2(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(aNotInB2([1, 2, 3, 4, 5], [2, 3, 4]));

function aNotInB3(arr1, arr2) {
  return arr1.filter((num) => !arr2.includes(num));
}
console.log(aNotInB3([1, 2, 3, 4, 5], [2, 3, 4]));

function smiles(arr) {
  let happy = [":)", ":-)", ":-D"];
  return arr.filter((face) => happy.includes(face)).length;
}
console.log(smiles([":)", ";(", ";}", ":-D"]));

// Ejercicios 8 kyu nuevamente

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("Hola Carola"));

function sumArr(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArr([2, 4, 6, 8]));

function firstChar(str) {
  return str[0];
}
console.log(firstChar("Hola"));

function esPar(num) {
  return num % 2 === 0 ? true : false;
}
console.log(esPar(4));
console.log(esPar(5));

function lastChar(str) {
  return str[str.length - 1];
}
console.log(lastChar("hola coco"));

function repeatStr(str, times) {
  return str.repeat(times);
}
console.log(repeatStr("hola!", 3));

function repeatStrSpace(str, times) {
  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr += str + " ";
  }
  return newStr;
}
console.log(repeatStrSpace("hola!", 3));

function containsNumber(arr, num) {
  return arr.includes(num);
}
console.log(containsNumber([1, 2, 3, 4], 2));
console.log(containsNumber([1, 2, 3, 4], 7));

function onlyEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(onlyEven([2, 4, 5, 7]));

function startsWithVowel(str) {
  let vowel = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  return vowel.includes(str[0]);
}
console.log(startsWithVowel("Hola"));
console.log(startsWithVowel("Alo"));

function multiplyArr(arr) {
  return arr.reduce((acum, num) => acum * num, 1);
}
console.log(multiplyArr([1, 2, 3, 4]));

function lengthWord(arr) {
  return arr.map((word) => word.length);
}
console.log(lengthWord(["hola", "cirujano"]));

function containSpaces(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") return true;
  }
  return false;
}
console.log(containSpaces("Hola"));
console.log(containSpaces("Hola Jorge"));

function containSpaces2(str) {
  return str.includes(" ");
}
console.log(containSpaces2("Hola"));
console.log(containSpaces2("Hola Jorge"));

function spaceForDash(str) {
  return str.replace(" ", "-");
}
console.log(spaceForDash("Hola Pepe"));

function spaceForDash2(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += "-";
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(spaceForDash2("Hola Pepe"));

function countVowels(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  return str.split("").filter((letter) => vowels.includes(letter)).length;
}
console.log(countVowels("hola"));
console.log(countVowels("llggjj"));
console.log(countVowels("aeioÚ"));

function countVowels2(str) {
  let count = 0;
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
}
console.log(countVowels2("hola"));
console.log(countVowels2("llggjj"));
console.log(countVowels2("aeioÚ"));

function plus5(arr) {
  return arr.filter((num) => num > 5).length;
}
console.log(plus5([1, 2, 3, 4, 5, 6, 7, 8, 9, 2]));

function plus5Two(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) count++;
  }
  return count;
}
console.log(plus5Two([5, 5, 5, 6, 9]));

function sumPos(arr) {
  return arr.filter((num) => num > 0).reduce((acum, num) => acum + num, 0);
}
console.log(sumPos([-5, -2, -3, 1, 2, 3]));

function numToStr(num) {
  return num.toString();
}
console.log(numToStr(4));
console.log(typeof numToStr(4));

function reversedString(str) {
  return str.split("").reverse().join("");
}
console.log(reversedString("hola"));

function evenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOdd(4));
console.log(evenOdd(5));

function repeatN(str, n) {
  return str.repeat(n);
}
console.log(repeatN("Hola", 3));

function firstAndLast(str) {
  return str.slice(1, -1);
}
console.log(firstAndLast("Hola Mundo"));

function smallest(arr) {
  return Math.min(...arr);
}
console.log(smallest([-5, 4, 8, 9, -22, 5]));

function smallest2(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(smallest2([-5, 4, 8, 9, -22, 5]));

function upper(str) {
  return str.toUpperCase();
}
console.log(upper("hola"));
console.log(upper("hoLa"));

function mathOperations(operation, value1, value2) {
  if (operation === "/") return value1 / value2;
  if (operation === "*") return value1 * value2;
  if (operation === "-") return value1 - value2;
  if (operation === "+") return value1 + value2;
  if (operation === "%") return value1 % value2;
}
console.log(mathOperations("%", 2, 6));
console.log(mathOperations("+", 2, 6));

function opposite(num) {
  return -num;
}
console.log(4);
console.log(-44);

function returnNegative(num) {
  return num > 0 ? -num : num;
}
console.log(returnNegative(4));
console.log(returnNegative(-7));

function countSheep(arr) {
  return arr.filter(Boolean).length;
}
console.log(countSheep([true, true, true, false, false]));

function abbreviate(str) {
  return (
    str
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join(".") + "."
  );
}
console.log(abbreviate("martin pravia"));

function duplicateNum(num) {
  return num * 2;
}
console.log(duplicateNum(4));

// ejercicios 7 kyu

function middleChar(str) {
  let middle = str.length;
  if (middle % 2 === 0) {
    return str[middle / 2 - 1] + str[middle / 2];
  } else {
    return str[Math.floor(middle / 2)];
  }
}
console.log(middleChar("hola"));
console.log(middleChar("Ala"));

function middleChar2(str) {
  return str.length % 2
    ? str[Math.floor(str.length / 2)]
    : str[str.length / 2 - 1] + str[str.length / 2];
}
console.log(middleChar2("hola"));
console.log(middleChar2("hol"));

function maxAndMin(str) {
  let nums = str.split(" ").map(Number);
  return [Math.max(...nums), Math.min(...nums)];
}
console.log(maxAndMin("4 5 9 2 7 -3 8 -55"));

function mumbling(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    if (i < str.length - 1) result += "-";
  }
  return result;
}
console.log(mumbling("hola"));

function mumbling2(str) {
  return str
    .split("")
    .map((word, index) => word.toUpperCase() + word.toLowerCase().repeat(index))
    .join("-");
}
console.log(mumbling2("hola"));

function sortNumber(num) {
  return num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
console.log(sortNumber(5679));

function shortestWord(str) {
  let length = str.split(" ").map((word) => word.length);
  return Math.min(...length);
}
console.log(shortestWord("Hola ey vocabulario"));

function isogram(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}
console.log(isogram("hola"));
console.log(isogram("holaHo"));

function ExesAndOhs(words) {
  let str = words.toLowerCase();
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") x++;
    if (str[i] === "o") o++;
  }
  return x === o;
}
console.log(ExesAndOhs("x o x o"));
console.log(ExesAndOhs("x o x o x X"));
console.log(ExesAndOhs("x o x o x X O O"));

function noVowels(str) {
  let vowels = "aeiouÁÉÍÓÚAEIOUáéíóú";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(noVowels("Hola pepe"));

function noVowels2(str) {
  let vowels = "aeiouÁÉÍÓÚAEIOUáéíóú";
  return str
    .split("")
    .filter((word) => !vowels.includes(word))
    .join("");
}
console.log(noVowels2("Hola pepe"));

function capitalizeFirstChar(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeFirstChar("hola pedrito como estas"));

function squareDigit(num) {
  return num
    .toString()
    .split("")
    .map((number) => number ** 2)
    .join("");
}
console.log(squareDigit("2345"));

function binaryAddition(num1, num2) {
  return (num1 + num2).toString(2);
}
console.log(binaryAddition(358, 6));

function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}
console.log(countDivisors(564));

function vowelCount(str) {
  let vowels = "aeiouÁÉÍÓÚAEIOUáéíóú";
  return str.split("").filter((letter) => vowels.includes(letter)).length;
}
console.log(vowelCount("hola"));
console.log(vowelCount("holaaaaa"));

function printErrors(words) {
  let str = words.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > "m") count++;
  }
  let percentage = (count / str.length) * 100;
  return percentage.toFixed(2) + "%";
}
console.log(printErrors("Hola Corcho del mal"));

function sumPositives(arr) {
  return arr.filter((num) => num > 0).reduce((acum, num) => acum + num, 0);
}
console.log(sumPositives([-5, 8, 2, -99, -4, -2, 2]));

function palindrome(word) {
  let str = word.toLowerCase();
  return str === str.split("").reverse().join("");
}
console.log(palindrome("hola"));
console.log(palindrome("lalal"));
console.log(palindrome("lalaL"));

function palindrome2(word) {
  let str = word.toLowerCase();
  let backwards = "";
  for (let i = str.length - 1; i >= 0; i--) {
    backwards += str[i];
  }
  if (backwards === str) return true;
  else return false;
}
console.log(palindrome2("hola"));
console.log(palindrome2("lalal"));
console.log(palindrome2("lalaL"));

function theSame(arr) {
  return arr.every((num) => num === arr[0]);
}
console.log(theSame([2, 2, 2]));
console.log(theSame([2, 2, 2, 3]));

function endStringWith(str, last) {
  return str.endsWith(last);
}
console.log(endStringWith("hola pepe", "pepe"));

function capitalizeFirst(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeFirst("hola pepe como estas?"));
console.log(capitalizeFirst("HOLA MANOLO"));

function inverseArr(arr) {
  return arr.reverse();
}
console.log(inverseArr([1, 2, 3]));

function inverseArr2(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(inverseArr2([1, 2, 3]));

function duplicate(str) {
  return str
    .split("")
    .map((word) => word + word)
    .join("");
}
console.log(duplicate("Hola"));

function countVowels(str) {
  let vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  return str.split("").filter((str) => vowels.includes(str)).length;
}
console.log(countVowels("Hola"));
console.log(countVowels("AAaaáÁ"));

function returnOdd(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  return odd;
}
console.log(returnOdd([1, 2, 2, 3, 1]));

function squareOfNum(num) {
  return num
    .toString()
    .split("")
    .map((num) => num ** 2)
    .join("");
}
console.log(squareOfNum(9119));

function sumAllPositives(arr) {
  return arr.filter((num) => num > 0).reduce((accum, num) => accum + num, 0);
}
console.log(sumAllPositives([1, -4, 7, 12]));

function theMin(arr) {
  return Math.min(...arr);
}
console.log(theMin([-5, 8, 555, -555, 999]));

function multiplyForNum(arr, num) {
  return arr.map((n) => n * num);
}
console.log(multiplyForNum([1, 2, 3], 2));

function palindrome4(str) {
  return str === str.split("").reverse().join("");
}
console.log(palindrome4("hola"));
console.log(palindrome4("ava"));

function countEven(arr) {
  return arr.filter((num) => num % 2 === 0).length;
}
console.log(countEven([2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9]));

// Ejercicios 6kyu

function findTheOnly(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  return odd;
}
console.log(findTheOnly([4, 1, 2, 1, 2]));

function diferenceArr3(arr1, arr2) {
  return arr1.filter((num) => !arr2.includes(num));
}
console.log(diferenceArr3([1, 2, 2, 3], [2]));

function orderEvenOnly(arr) {
  let result = [];
  let index = 0;
  let evenFiltered = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    } else {
      result.push(evenFiltered[index]);
      index++;
    }
  }
  return result;
}
console.log(orderEvenOnly([5, 3, 2, 8, 1, 4]));

function twoVersionsCapitalize(str) {
  let firstCap = "";
  let secondCap = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      firstCap += str[i].toUpperCase();
      secondCap += str[i].toLowerCase();
    } else {
      firstCap += str[i].toLowerCase();
      secondCap += str[i].toUpperCase();
    }
  }
  return [firstCap, secondCap];
}
console.log(twoVersionsCapitalize("abcdef"));

function deleteLetters(str1, str2) {
  return str1.split("").filter((letter) => !str2.includes(letter));
}
console.log(deleteLetters("hello", "el"));

function intercalate(arr1, arr2) {
  return arr1.flatMap((num, index) => [num, arr2[index]]);
}
console.log(intercalate([1, 2, 3], [4, 5, 6]));

function firtsCharNotRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return "No match";
}
console.log(firtsCharNotRepeated("abacabad"));

function allTheCharNotRepeated(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      result.push(str[i]);
    }
  }
  return result;
}
console.log(allTheCharNotRepeated("abacabad"));

function balanced(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
}
console.log(balanced("(())"));
console.log(balanced("(()))))"));

function findTheOddOrEven(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  if (odd.length === 1) return odd;
  if (even.length === 1) return even;
}
console.log(findTheOddOrEven([2, 4, 6, 8, 10, 3]));

function whoLikesIt(arr) {
  if (arr.length === 0) return "Nobody likes this";
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} likes this`;
  if (arr.length === 3)
    return `${arr[0]}, ${arr[1]} and ${arr[2]} more likes this`;
  if (arr.length >= 4)
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} likes this`;
}
console.log(whoLikesIt(["pepe", "maria", "juan", "pedro"]));
console.log(whoLikesIt(["pepe", "maria", "juan"]));
console.log(whoLikesIt(["pepe", "maria", "juan"]));
console.log(whoLikesIt(["pepe"]));
console.log(whoLikesIt([]));

function orderWords(words) {
  let str = words.split(" ");
  let result = [];
  for (let i = 1; i <= str.length; i++) {
    for (let word of str) {
      if (word.includes(i.toString())) result.push(word);
    }
  }
  return result.join(" ");
}
console.log(orderWords("is2 Thi1s T4est 3a"));

function sumMultiply3Or5(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}
console.log(sumMultiply3Or5(10));

function invert5Plus(str) {
  return str
    .split(" ")
    .map((word) => (word.length > 5 ? word.split("").reverse().join("") : word))
    .join(" ");
}
console.log(invert5Plus("Hey fellow warriors"));

function countChar(str) {
  let obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
console.log(countChar("aba"));

function phoneNumber(num) {
  let base = "(xxx) - xxx-xxxx";
  for (let i = 0; i < num.length; i++) {
    base = base.replace("x", num[i]);
  }
  return base;
}
console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function findTheOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count % 2 !== 0) return arr[i];
  }
}
console.log(findTheOdd([1, 1, 2]));

function camelCaseOneWord(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}
console.log(camelCaseOneWord("hello word"));

function sumSquareToOne(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
  }
  return num;
}
console.log(sumSquareToOne(942));

function panagram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet
    .split("")
    .every((letter) => str.toLowerCase().includes(letter));
}
console.log(panagram("The quick brown fox jumps over the lazy dog"));

function uniqueOrder(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      newArr.push(str[i]);
    }
  }
  return newArr;
}
console.log(uniqueOrder("AAAABBBCCCDDDABBBB"));

function sumTheSmallest(arr) {
  let small1 = Infinity;
  let small2 = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small1) {
      small1 = arr[i];
    } else if (arr[i] < small2) {
      small2 = arr[i];
    }
  }
  return small1 + small2;
}
console.log(sumTheSmallest([5, 8, 12, 18, 22]));

function sumTheSmallest2(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}
console.log(sumTheSmallest2([5, 8, 12, 18, 22]));

function aNotInB123(arr1, arr2) {
  return arr1.filter((words) => !arr2.includes(words));
}
console.log(aNotInB123([1, 2, 2, 2, 3], [2]));

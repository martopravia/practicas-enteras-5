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

// function fakeBin(x) {
//   let arr = x.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 5) {
//       arr[i] = 0;
//     }
//     if (arr[i] >= 5) {
//       arr[i] = 1;
//     }
//   }
//   let res = arr.join("");
//   return res;
// }
// console.log(fakeBin("45385593107843568"));

// function strCount(str, letter) {
//   let num = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter) {
//       num++;
//     }
//   }
//   return num;
// }
// console.log(strCount("", "z"));

// function solution(string) {
//   let splitStr = string.split("");
//   let newStr = string.split("");
//   let capStr = string.toUpperCase().split("");
//   for (i = splitStr.length - 1; i >= 0; i--) {
//     if (splitStr[i] === capStr[i]) {
//       newStr.splice(i, 0, " ");
//     }
//   }
//   return newStr.join("");
// }
// console.log(solution("camelCasing"));

// function sumTwoSmallestNumbers(numbers) {
//   let min = numbers[0];
//   let arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (min > numbers[i]) {
//       min = numbers[i];
//     }
//   }
//   for (key in numbers) {
//     if (numbers[key] !== min) {
//       arr.push(numbers[key]);
//     }
//   }
//   let dMin = arr[0];
//   for (key in arr) {
//     if (dMin > arr[key]) {
//       dMin = arr[key];
//     }
//   }
//   return min + dMin;
// }
// console.log(sumTwoSmallestNumbers([66, 32, 4, 76, 13]));

// function sumTwoSmallestNumbers(numbers) {
//   let arr = [];
//   let min = Math.min(...numbers);
//   for (key in numbers) {
//     if (numbers[key] !== min) {
//       arr.push(numbers[key]);
//     }
//   }
//   let minTwo = Math.min(...arr);
//   return minTwo + min;
// }
// console.log(sumTwoSmallestNumbers([44, 53, 6, 75]));

// let number = function (busStops) {
//   let firstEl = 0;
//   let secEl = 0;
//   for (key in busStops) {
//     firstEl += busStops[key][0];
//     secEl += busStops[key][1];
//   }
//   return firstEl - secEl;
// };
// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

// function isValidWalk(walk) {
//   walk.map((a, b) => {
//     if (a == b) return true;
//     return false;
//   });
// }
// console.log(isValidWalk(["n", "s", "n", "e"]));

// function minMax(arr) {
//   let max = 0;
//   let min = arr[0];

//   for (el of arr) {
//     if (max < el) {
//       max = el;
//     }
//     if (min > el) {
//       min = el;
//     }
//   }
//   if(min == 0 &&)
//   return [min, max]; // fix me!
// }
// console.log(minMax([-153120, +0]));

// function stringToArray(string) {
//   return string.split(" ");
// }
// console.log(stringToArray("Hello world"));

// function countPositivesSumNegatives(input) {
//   let pos = 0;
//   let neg = 0;
//   for (num of input) {
//     // if (num > 0) {
//     //   pos++;
//     // } else {
//     //   neg += num;
//     // }
//     num > 0 ? pos++ : (neg += num);
//   }
//   return [pos, neg];
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, -3, -3, -3]));

// var number = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = `${i + 1}: ${array[i]}`;
//   }
//   return array;
// };
// console.log(number(["a", "b", "c"]));

// const p1 = new Promise((res, rej) => {
//   // console.log(typeof res);
//   if (res) {
//     setTimeout(() => {
//       console.log(Error("Ошибка блет"));
//       rej;
//     });
//   }
//   setTimeout(() => {
//     console.log("Hi");
//     res();
//   }, 2000);
// });
// // console.log(p1);
// p1.then();
// p1.catch();

// function squareDigits(num) {
//   let str = num.toString().split("");
//   for (let i = 0; i < str.length; i++) {
//     str[i] = Number(str[i]);
//     str[i] **= 2;
//   }

//   return Number(str.join(""));
// }
// console.log(squareDigits(222));

//В массиве целых чисел найдите то, которое встречается нечетное количество раз. Всегда будет только одно целое число, которое появляется нечетное количество раз.
// function findOdd(numbers) {
//   var count = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     for (var j = 0; j < numbers.length; j++) {
//       if (numbers[i] == numbers[j]) {
//         count++;
//       }
//     }
//     if (count % 2 != 0) {
//       return numbers[i];
//     }
//   }
// }

// function XO(str) {
//   let x = 0;
//   let o = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "x" || str[i] == "X") {
//       x++;
//     }
//     if (str[i] == "o" || str[i] == "O") {
//       o++;
//     }
//   }
//   if (x == o) {
//     return true;
//   }
//   return false;
// }
// console.log(XO("XxoO"));

// console.log(parseInt("Hell1"));

//Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число обозначает позицию, которую слово должно занимать в результате.
// Пример:
//--------"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//--------"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// function order(words){
//   let arr = words.split(' ')
//   let r = []

//   arr.forEach(word=>{
//     let x = word.split('')
//     let num = x.find(el=>parseInt(el))
//     r.push([word,parseInt(num)])
//   })

//   r.sort((a,b)=>a[1]-b[1]).map(x=> x.splice(1,1))
//   return r.join(' ')
// }

// function rentalCarCost(d) {
//   let sum = 0;
//   for (let i = 0; i < d; i++) {
//     console.log(d);
//     if (d < 3) {
//       sum += 40;
//     }
//     if (d >= 3) {
//       sum += 40;
//       //   sum - 20;
//     }
//     if (d >= 7) {
//       sum += 40;
//       sum - 50;
//     }
//   }
//   return sum;
// }
// console.log(rentalCarCost(3));

// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   // let arr = [];
//   for (let i = 0; i < birds.length; i++) {
//     for (let j = 0; j < geese.length; j++) {
//       // console.log(geese[j]);
//       if (birds.indexOf(geese[j])) {
//         birds.splice(i, 1);
//       }
//     }
//   }
//   // for (let g of geese) {
//   //   birds.splice(birds.indexOf(g)++, 1);
//   // }
//   return birds;
// }
// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

// function findShort(s) {
//   let min = null;
//   let arr = s.split(" ");
//   for (let i of arr) {
//     if (min == null || i.length < min) {
//       min = i.length;
//     }
//   }
//   return min;
// }
// console.log(findShort("Lets travel abroad shall wes"));

// function getAge(inputString) {
//   return parseInt(inputString);
// }
// console.log(getAge("4 years old"));

// function disemvowel(str) {
//   let vowels = "aeiouy";
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i].toLowerCase())) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
// console.log(disemvowel("This website is for losers LOL!"));

// function filter_list(l) {
//   let arr = [];
//   for (let el of l) {
//     if (Number(el) >= 0 && el !== el.toString()) {
//       arr.push(el);
//     }
//   }
//   return arr;
// }
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// function shortcut(string) {
//   let newStr = "";
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (el of string) {
//     if (!vowels.includes(el)) {
//       newStr += el;
//     }
//   }
//   return newStr;
// }
// console.log(shortcut("how are you today?"));

// let arr = [3, 5, 2, 55, 1, 3, 2, 27, 2];
// let max = 0;
// let min = null;
// for (let el of arr) {
//   if (el > max) {
//     max = el;
//   }
//   if (min == null || el < min) {
//     min = el;
//   }
// }
// console.log([max, min]);

// function abbrevName(name) {
//   let arr = name.split(" ");

//   return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
// }
// console.log(abbrevName("sam harris"));

// function solution(nums) {
//   return nums.sort((a, b) => a - b);
// }
// console.log(solution([null]));

// function reverseWords(str) {
//   // Go for it

//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }
// console.log(reverseWords("Hello world"));

// function twoSort(s) {
//   let sorted = s.sort();
//   return sorted[0].split("").join("***");
// }
// console.log(twoSort(["ceptus", "bectus", "actus"]));

// function feast(beast, dish) {
//   return (
//     beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
//   );
// }
// console.log(feast("black bear", "bploctr"));

// function removeUrlAnchor(url) {
//   // let arr = url.split("");
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] == "#") {
//   //     arr.splice(i, url.length);
//   //   }
//   // }
//   // return arr.join("");

//   return url.split("#")[0];
// }
// console.log(removeUrlAnchor("www.codewars.com#about"));

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = n; i > 0; i--) {
    if (n % i == 0) count++;
  }
  return count;
}
console.log(getDivisorsCnt(500000));

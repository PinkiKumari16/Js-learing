// let str = 'Pinki Kumari';
// console.log(str.length);

// let lowerStr = str.toLowerCase();
// console.log(lowerStr)

// let upperCase = str.toUpperCase();
// console.log(upperCase);

// console.log(str.includes('i'));
// console.log(str.startsWith('p'))
// console.log(str.endsWith('i'));
// console.log(str.search('Ku'));
// console.log(str.match('Pinki'));
// let num = '445.4';
// let pi = parseInt(num);
// console.log(pi);

// const checkSwap = (s1,s2) =>{
//     if(s1.legth !== s2.legth){
//         return false
//     }
//     else{
//         let s11=s1.split("").toSorted().join("");
//         let s22=s2.split("").toSorted().join("");
//         if(s11 === s22){
//             return true
//         }else{
//             return false
//         }
//     }

// }
// const input = require('readline-sync');
// let s1 = input.question('S1: ');
// let s2 = input.question('S2: ');
// console.log(checkSwap(s1,s2));


// ************  Count methods  ******************

let count = require('collect.js');
const a = [1,3,5,3,3,2,3,2];

const arr = count(a);
console.log(arr.count(3))
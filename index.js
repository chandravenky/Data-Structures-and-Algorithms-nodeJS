// var example2 = require("./example2.js");
// var example3 = require("./example3.js");
// const {performance} = require('perf_hooks');

// const nemo = ['nemo'];
// const everyone = ['dory', 'apple', 'apple1', 'dory', 'apple', 'apple1','dory', 'apple', 'apple1', 'nemo']

// const large_array = new Array(10000).fill('nemo')

// function findNemo1(array) {
//   let t1 = performance.now()
//   for (let i=0; i<array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//       break;
//     }
//   }
//   let t2 = performance.now();
//   console.log(t2-t1);
// }

// // findNemo1(large_array);
// // const boxes = [1,2,3,4,5];
// // example2.logAllPairsOfArray(boxes);

// // array1 = [1,2,3,4]
// // array2 = [7,8,9,1]
// // example3.commonItem(array1, array2);

// array1 = [1,2,3,4]
// array2 = [7,8,9,0]
// example3.commonItem2(array1, array2);

// Create a function that reverses a string

// Create a function that reverses a string

//Merge 2 sorted arrays


// function mergeSortedArrays(array1, array2) {

//   const mergedArray = []
//   let array1Item = array1[0]
//   let array2Item = array2[0]
//   let i = 1;
//   let j =1;

//   //Check input
//   if (array1.length ===0){
//     return array2;
//   }

//   if (array2.length ===0){
//     return array1;
//   }

//   while (array1Item || array2Item) {
//     if (!array2Item || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i=i+1;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j=j+1;
//     }
//   }

//   return mergedArray
// }

// array1 = [0,1,2,3,8]
// array2 = [4,5,6]
// console.log(mergeSortedArrays([array1], [array2]))




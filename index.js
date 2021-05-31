var example2 = require("./example2.js");
const {performance} = require('perf_hooks');

const nemo = ['nemo'];
const everyone = ['dory', 'apple', 'apple1', 'dory', 'apple', 'apple1','dory', 'apple', 'apple1', 'nemo']

const large_array = new Array(10000).fill('nemo')

function findNemo1(array) {
  let t1 = performance.now()
  for (let i=0; i<array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  let t2 = performance.now();
  console.log(t2-t1);
}

// findNemo1(large_array);
const boxes = [1,2,3,4,5];
example2.logAllPairsOfArray(boxes);
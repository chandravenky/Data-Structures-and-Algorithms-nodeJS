
// O(n^2) time complexity
// O(1) space complexity
// exports.commonItem = function(array1, array2){
//   for(let i=0; i< array1.length; i++){
//     for(let j=0; j< array2.length; j++){
//       if (array1[i] === array2[j]){
//         return true;
//       }
//     }
//   }
//   return false;
// }

// O(n) time complexity
// O(a) space complexity
exports.commonItem2 = function(array1, array2){
// loop through first array and create items as properties

let map = {};
for(let i=0; i< array1.length; i++) {
  if (!map[array1[i]]){
    const item = array1[i];
    map[item] = true;
  }
}
// loop through second array and check if the item is one of the properties of the first array
for (let j=0; j< array2.length; j++){
  if (map[array2[j]]){
    return true;
  }
}
return false;
}

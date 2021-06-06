//Merge 2 sorted arrays


function mergeSortedArrays(array1, array2) {

  const mergedArray = []
  let array1Item = array1[0]
  let array2Item = array2[0]
  let i = 1;
  let j =1;

  //Check input
  if (array1.length ===0){
    return array2;
  }

  if (array2.length ===0){
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i=i+1;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j=j+1;
    }
  }

  return mergedArray
}

array1 = [0,1,2,3,8]
array2 = [4,5,6]
console.log(mergeSortedArrays(array1, array2))
// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(array){

  let unique_set = new Set();

  for(let i=0; i<array.length; i++){
    if (unique_set.has(array[i])){
      return true
    }
    else {
      unique_set.add(array[i])
    }
  }

  return false
}

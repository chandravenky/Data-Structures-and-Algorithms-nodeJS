//https://leetcode.com/problems/move-zeroes/

function moveZeroes(array){

  let index = 0;

  for(i=0; i<array.length; i++){

    if (array[i]!=0){
      array[index] = array[i];
      index++;
    }
  }

  for (let i= index; i<array.length; i++){
    array[i] = 0;
  }

  return array

}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  
  for (i=0; i< array.length; i++){
    let min_value_index = i;
    let temp_value = array[i];
    for (let j =i +1; j<array.length; j++){
      if(array[j]<array[min_value_index]){
        min_value_index = j;
      }
    }
    array[i] = array[min_value_index];
    array[min_value_index] = temp_value;
  }
  return array
}

selectionSort(numbers);
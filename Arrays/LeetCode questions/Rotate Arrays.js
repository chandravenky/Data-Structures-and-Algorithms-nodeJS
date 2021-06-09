// https://leetcode.com/problems/rotate-array/

//Approach 1
function rotateArray(array, k){

	index =0;
	array_remaining = array.splice(array.length - k);
	
return array_remaining.concat(array)


}

console.log(rotateArray([1,2,3,4,5,6,7],3))


//Approach 2
function rotateArray(array, k){

	var reverse = function(array_input, start_index, end_index){
    while (start_index<end_index){
      temp_stored_num = array_input[start_index]
      array_input[start_index]= array_input[end_index]
      array_input[end_index] = temp_stored_num
      start_index++
      end_index--
    }
    return array_input
  }

  k = k%array.length

  array = reverse(array, 0, array.length -1)
  array = reverse(array, 0, k -1)
  array = reverse(array, k, array.length -1)

  return array
}

console.log(rotateArray([1,2,3,4,5,6,7],3))
//https://leetcode.com/problems/maximum-subarray/

function max_sub_array(array) {
    
    var current_sum = 0;
    var max_sum = array[0];

    for (let i=0; i<array.length; i++){

        current_sum = Math.max(array[i], current_sum + array[i])
	
	      max_sum = Math.max(current_sum, max_sum) 


    }
    return max_sum
}

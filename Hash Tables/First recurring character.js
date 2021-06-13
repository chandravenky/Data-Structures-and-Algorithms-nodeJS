
function first_recurring_char(array){
  let map = {} 
  for (let i =0; i<array.length; i++){
    if (map[array[i]]){
      return array[i]
    }
    else {
      map[array[i]] = 1
    }
  }
}

first_recurring_char([1,2,2,1,1])
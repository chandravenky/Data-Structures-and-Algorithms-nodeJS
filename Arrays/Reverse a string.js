// Create a function that reverses a string

function reverseString(string) {

  if (!string || string.length<2 || typeof string !== 'string'){
    return 'Bad input'
  };

  array1 = string.split('');
  array2= []
  
  for (let i=0; i<array1.length; i++) {
    array2[i] = array1[array1.length -i - 1];
  }
  return array2.join('');
}

console.log(reverseString("How are you doing?"));
console.log(reverseString());
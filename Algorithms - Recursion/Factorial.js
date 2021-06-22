// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  
  answer = 1
  if(number==1) {
    return 1
  }

  return number * findFactorialRecursive(number-1);
}

findFactorialRecursive(5)

function findFactorialIterative(number) {
  answer = 1
  while(number>1) {
    answer = answer * number

    number --
  }
  return answer;
}

findFactorialIterative(4)
findFactorialIterative(5)
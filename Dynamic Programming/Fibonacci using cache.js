
function fibonacciCache(n){
  let cache = {};
  return function fib(n) {
  if (n in cache) {
     return cache[n];
  } else
  {
  if(n<2){
    return n
  } else {
    cache[n] = fib(n-1) + fib(n-2);
    return cache[n];
  }
}
}
}


function fibonacci(n){
  if(n<2){
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

// fibonacci(30)
const fibonacciObj = fibonacciCache();

console.log(fibonacciObj(30));


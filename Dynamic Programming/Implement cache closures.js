// using closures

function memoizedAddTo80() {
  let cache = {};
  return function(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("store to cache")
    cache[n] = n +80;
    return cache[n];
  }
  }
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(8));
console.log(memoized(5));
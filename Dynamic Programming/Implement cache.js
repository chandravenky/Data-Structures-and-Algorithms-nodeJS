cache = []

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("store to cache")
    cache[n] = n +80;
    return cache[n];
  }
}

memoizedAddTo80(2);
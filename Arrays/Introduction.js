const strings = ['a', 'b', 'c', 'd'];

strings.push('e')
console.log(strings)

strings.pop()
console.log(strings)

strings.unshift('x')
console.log(strings)

//splice
strings.splice(2, 0, 'alien')
console.log(strings)

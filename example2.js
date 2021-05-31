

exports.logAllPairsOfArray = function (array){
  for (let k=0; k < array.length; k++){
    for (let j=0; j < array.length; j++) {
      console.log(array[k], array[j])
    }
  }
}

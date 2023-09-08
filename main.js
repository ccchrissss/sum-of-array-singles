function repeats(arr){
  
  let sumOfSingleOccNums = 0

  for (let i = 0; i < arr.length; i++) {
    
    if ( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]) ) { sumOfSingleOccNums += arr[i] }
    
  }

  return sumOfSingleOccNums
};

console.log(repeats([6, 8, 12, 13, 6, 12, 9, 13]))


// parameters: arr     // an array of numbers where two nums occur once and the rest occur twice
// return number     // the sum of the two numbers that occur only once
// e.g. repeats([6, 8, 12, 13, 6, 12, 9, 13])
// results in 17


// declare and assign a variable sumOfSingleOccNums to a value of 0
// loop through the array
// if the first index of the number at arr[i] == the last index of the number at arr[i] then add this number to and reassign sumOfSingleOccNums 
// end loop
// return sumOfSingleOccNums


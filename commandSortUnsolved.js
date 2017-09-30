// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var numbers = process.argv;
var number = "";

console.log(process.argv);
//descending order commented out
numbers.sort(function(a, b) {
  return a - b;
  //return b - a;
});
console.log(numbers);



//var numArray = [];





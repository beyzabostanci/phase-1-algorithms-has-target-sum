function hasTargetSum(array, target) {
  let sum = 0;
  for (let i=0; i<array.length; i++){
    for (let j=i+1; j<array.length; j++){
      sum = array[i] + array[j];
      if(sum === target){
        return true;
      }
     }
  }return false;
}

/*
  Write the Big O time complexity of your function here

  O(n²)	Quadratic,	Nested iteration
*/

/*
  Add your pseudocode here

  you need a place to store the sum
  create 2 for loops to check the values of the array and they should be nested because we are gonna compare 2 arrays and one of them gonna use other ones values
  you need to give order to compare one then other then other
  sum needs to be equal to target and if its equal then return true
  if don't return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

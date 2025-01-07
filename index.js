function hasTargetSum(array, target) {
  // Create a set to store the numbers we've seen so far
  const seenNumbers = new Set();

  // Loop through the array to find the target sum pair
  for (let num of array) {
    const complement = target - num;

    // If the complement exists in the set, we found a pair
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set for future comparisons
    seenNumbers.add(num);
  }

  // If no pair was found, return false
  return false;
}

/* 
  Big O time complexity: O(n), where n is the number of elements in the array.
*/

/* 
  Pseudocode:
  - Create an empty set to store numbers we've already seen.
  - Loop through the array:
    - For each number, calculate its complement (target - number).
    - If the complement is already in the set, return true.
    - If not, add the current number to the set.
  - After the loop, return false if no pair has been found.
*/

/*
  Explanation:
  - This algorithm uses a single loop to go through the array once.
  - We use a set to store numbers we've seen, which allows us to check for the complement in constant time.
  - If we find the complement of the current number in the set, we return true.
  - If we finish checking all the numbers without finding a pair, we return false.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;

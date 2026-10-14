/**
 * Problem: Maximum Sum Subarray of Size K
 *
 * Given an array of numbers and an integer k, find the maximum
 * sum of any k consecutive elements.
 *
 * Approach: Fixed-Size Sliding Window
 *
 * Time Complexity: O(n)
 * Auxiliary Space Complexity: O(1)
 */

const maxSumSubArray = (numbers: number[], k: number): number => {
  // Step 1: Calculate the sum of the first k elements
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += numbers[i];
  }

  // Step 2: Initialize the maximum using the first valid window
  let maxSum = windowSum;

  // Step 3: Slide the window through the remaining elements
  for (let i = k; i < numbers.length; i++) {
    // Remove the element leaving the window
    windowSum -= numbers[i - k];

    // Add the element entering the window
    windowSum += numbers[i];

    // Update the maximum sum
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
};

// Test cases
console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSumSubArray([3, 8, 2, 6, 4, 7], 3)); // 17
console.log(maxSumSubArray([-5, -2, -8, -1], 2));   // -7
console.log(maxSumSubArray([5, 2, 8, 1, 6], 2));    // 13
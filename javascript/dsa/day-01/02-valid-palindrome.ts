/**
 * Problem: Valid Palindrome
 * Pattern: String Manipulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Check whether a string reads the same forward and backward,
 * ignoring uppercase letters, spaces, and punctuation.
 */

const isPalindrome = (txt: string): boolean => {
  // Step 1: Convert to lowercase and remove non-alphanumeric characters
  const normalizedString = txt
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  // Step 2: Reverse the normalized string
  const reversedString = normalizedString
    .split("")
    .reverse()
    .join("");

  // Step 3: Compare and return the result
  return normalizedString === reversedString;
};

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Race Car!")); // true
console.log(isPalindrome("")); // true
console.log(isPalindrome("sfgsfA")); // false
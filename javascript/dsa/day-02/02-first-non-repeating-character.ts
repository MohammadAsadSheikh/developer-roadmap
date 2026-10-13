const firstNonRepeatedChar = (str: string): string | null => {
  const freq: Record<string, number> = {};

  // Step 1: Count character frequencies
  for (const char of str) {
    freq[char] = (freq[char] ?? 0) + 1;
  }

  // Step 2: Find the first character appearing once
  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
};

console.log(firstNonRepeatedChar("sdfasgbsf")); // "d"
console.log(firstNonRepeatedChar("leetcode"));  // "l"
console.log(firstNonRepeatedChar("aabb"));      // null
console.log(firstNonRepeatedChar("z"));         // "z"
console.log(firstNonRepeatedChar(""));          // null
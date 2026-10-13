
/**
 * Day 2 — Frequency Counter
 *
 * Concepts:
 * - TypeScript types
 * - for...of
 * - Array.reduce()
 * - Record<K, V>
 * - Time and space complexity
 */

// 1. Count the frequency of each character using for...of

const countCharacterFrequency = (
  str: string
): Record<string, number> => {
  const frequency: Record<string, number> = {};

  for (const char of str) {
    frequency[char] = (frequency[char] ?? 0) + 1;
  }

  return frequency;
};

// 2. Count the frequency of each character using reduce()

const countCharacterFrequencyWithReduce = (
  str: string
): Record<string, number> => {
  return str.split("").reduce<Record<string, number>>(
    (frequency, char) => {
      frequency[char] = (frequency[char] ?? 0) + 1;
      return frequency;
    },
    {}
  );
};

// 3. Count the frequency of each number using reduce()

const countNumberFrequency = (
  numbers: number[]
): Record<number, number> => {
  return numbers.reduce<Record<number, number>>(
    (frequency, number) => {
      frequency[number] = (frequency[number] ?? 0) + 1;
      return frequency;
    },
    {}
  );
};

// Test cases

const sampleString = "asdbfscd";
const sampleNumbers = [1, 2, 3, 4, 5, 3, 2, 4, 3];

console.log("Character frequency using for...of:");
console.log(countCharacterFrequency(sampleString));

console.log("Character frequency using reduce:");
console.log(countCharacterFrequencyWithReduce(sampleString));

console.log("Number frequency using reduce:");
console.log(countNumberFrequency(sampleNumbers));



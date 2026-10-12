/**
 * Problem: Two Sum
 * Pattern: Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

const twoSum = (numbers: number[], target: number): number[] => {

    const seen = new Map<number, number>();

    for (let i = 0; i < numbers.length; i++) {

        const difference = target - numbers[i];

        const previousIndex = seen.get(difference);

        if (previousIndex !== undefined) {
            return [previousIndex, i];
        }
        seen.set(numbers[i], i)
    }
    return [];
}

// Test cases
console.log(twoSum([1, 2, 3, 4, 5], 4))
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log(twoSum([3, 3], 6));        // [0, 1]
console.log(twoSum([1, 2, 3], 10));    // []

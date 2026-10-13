# Day 2 — DSA Practice

## Problem 2: First Non-Repeating Character

### Problem Statement

Given a string, find the first character that appears exactly once.

Return `null` if no such character exists.

### Examples

| Input | Output |
|---|---|
| `"aabbcddee"` | `"c"` |
| `"leetcode"` | `"l"` |
| `"aabb"` | `null` |
| `"aabbc"` | `"c"` |
| `"z"` | `"z"` |
| `""` | `null` |

### Approach: Frequency Counter

We use two loops to solve this problem.

**Step 1: Count character frequencies**

Create an object to store the frequency of every character.

```typescript
const freq: Record<string, number> = {};

for (const char of str) {
  freq[char] = (freq[char] ?? 0) + 1;
}
```

For the input `"aabbc"`, the frequency object becomes:

```typescript
{
  a: 2,
  b: 2,
  c: 1
}
```

**Step 2: Find the first non-repeating character**

Loop through the original string and check whether the current character's frequency is exactly `1`.

```typescript
for (const char of str) {
  if (freq[char] === 1) {
    return char;
  }
}
```

**Step 3: Handle the edge case**

If no character appears exactly once, return `null`.

### Why Do We Use Two Loops?

The first loop counts all character occurrences. We must finish counting before deciding whether a character is unique.

The second loop checks the original string from left to right, ensuring that we return the **first** non-repeating character.

Returning a character immediately during the counting loop would be incorrect because that character might appear again later.

### Complexity Analysis

- **Time Complexity:** `O(n)` — we traverse the string twice.
- **Space Complexity:** `O(k)` — the frequency object stores distinct characters.

Here:
- `n` = length of the string.
- `k` = number of distinct characters.

### Concepts Learned

- Frequency counter pattern
- JavaScript objects
- TypeScript `Record<string, number>`
- Two-pass algorithms
- Early return
- Null return types
- Edge-case handling
- Time and space complexity

### Key Takeaway

**Count first, then search.** This pattern is useful for many string and array problems in coding interviews.

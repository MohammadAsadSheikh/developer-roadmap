# Day 3 — Fixed-Size Sliding Window

## Problem: Maximum Sum Subarray of Size K

Given an array of integers and an integer `k`, find the maximum sum of any `k` consecutive elements.

### Examples

**Example 1**

Input:
```typescript
numbers = [2, 1, 5, 1, 3, 2]
k = 3
```

Output:
```text
9
```

Explanation: The subarray `[5, 1, 3]` has the maximum sum: `5 + 1 + 3 = 9`.

**Example 2: Negative numbers**

Input:
```typescript
numbers = [-5, -2, -8, -1]
k = 2
```

Output:
```text
-7
```

Explanation: The subarray `[-5, -2]` has the maximum sum of `-7`.

## Approach: Sliding Window

1. Calculate the sum of the first `k` elements.
2. Initialize `maxSum` using that first window's sum.
3. Slide the window one position at a time.
4. Subtract the outgoing element from `windowSum`.
5. Add the incoming element to `windowSum`.
6. Update `maxSum` whenever the current window sum is larger.
7. Return `maxSum`.

### Key formula

```text
newWindowSum = previousWindowSum - outgoingElement + incomingElement
```

We reuse the previous sum instead of recalculating every element in each window.

## Dry Run

Input:
```text
numbers = [2, 1, 5, 1, 3, 2]
k = 3
```

Initial window: `[2, 1, 5]`

```text
windowSum = 2 + 1 + 5 = 8
maxSum = 8
```

| Window | Sum | Maximum so far |
|---|---:|---:|
| `[2, 1, 5]` | 8 | 8 |
| `[1, 5, 1]` | 7 | 8 |
| `[5, 1, 3]` | 9 | 9 |
| `[1, 3, 2]` | 6 | 9 |

Final answer: `9`

## Why initialize maxSum from windowSum?

Do not initialize `maxSum` to `0` when negative values are possible.

For example, if every valid window has a negative sum, starting from zero would return an incorrect answer. Initializing `maxSum = windowSum` ensures the answer begins with a valid window.

## Complexity Analysis

- **Time Complexity:** `O(n)` — each element is processed a constant number of times.
- **Auxiliary Space Complexity:** `O(1)` — only a fixed number of variables are used.

## Concepts Learned

- Fixed-size sliding window
- Running sum
- Outgoing and incoming elements
- Maximum tracking
- Negative-number edge cases
- Time and space complexity
- Avoiding repeated calculations

## Interview Takeaway

Sliding Window is useful when a problem involves consecutive elements or a contiguous subarray. For a fixed-size window, reuse the previous result by removing the outgoing element and adding the incoming element.
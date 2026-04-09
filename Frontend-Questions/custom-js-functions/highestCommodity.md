# Highest Commodity Price

## Introduction

This algorithm solves the problem of finding the maximum price from time 0 up to each time step in a given array. It's a classic Kadane's algorithm variation used in stock market analysis to determine the best time to buy a stock.

## Context

This algorithm is commonly used for:

- Stock price analysis (best time to buy)
- Finding running maximums
- Prefix maximum problems
- Real-time data analysis
- Interview preparation for array processing

## Problem Statement

You are given an array of prices where index represents a time step. For each time step i, find the maximum price from time 0 to i.

## Implementation

```javascript
const highestCommodity = (arr) => {
  const result = [];
  const maxSoFar = -Infinity;

  for (let price of arr) {
    if (price > maxSoFar) {
      maxSoFar = price;
    }
    result.push(maxSoFar);
  }
  return result;
};

// Usage
const prices = [5, 3, 8, 4, 9, 2, 7];
console.log(highestCommodity(prices));
// Output: [5, 5, 8, 8, 9, 9, 9]
```

## How It Works

1. Initialize `maxSoFar` to negative infinity
2. Iterate through each price in the array
3. If current price is greater than `maxSoFar`, update `maxSoFar`
4. Push the current maximum to the result array
5. Return the result array containing running maximums

## Time and Space Complexity

- **Time Complexity:** O(n) - single pass through the array
- **Space Complexity:** O(n) - for storing the result array

## Example Walkthrough

```
Input: [5, 3, 8, 4, 9, 2, 7]

Step 1: price = 5, maxSoFar = -Infinity → maxSoFar = 5, result = [5]
Step 2: price = 3, maxSoFar = 5 → result = [5, 5]
Step 3: price = 8, maxSoFar = 5 → maxSoFar = 8, result = [5, 5, 8]
Step 4: price = 4, maxSoFar = 8 → result = [5, 5, 8, 8]
Step 5: price = 9, maxSoFar = 8 → maxSoFar = 9, result = [5, 5, 8, 8, 9]
Step 6: price = 2, maxSoFar = 9 → result = [5, 5, 8, 8, 9, 9]
Step 7: price = 7, maxSoFar = 9 → result = [5, 5, 8, 8, 9, 9, 9]

Output: [5, 5, 8, 8, 9, 9, 9]
```

## Variations

```javascript
// Finding minimum instead of maximum
const lowestCommodity = (arr) => {
  const result = [];
  const minSoFar = Infinity;

  for (let price of arr) {
    if (price < minSoFar) {
      minSoFar = price;
    }
    result.push(minSoFar);
  }
  return result;
};

// With index tracking
const highestCommodityWithIndex = (arr) => {
  const result = [];
  let maxSoFar = -Infinity;
  let maxIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxSoFar) {
      maxSoFar = arr[i];
      maxIndex = i;
    }
    result.push({ price: maxSoFar, index: maxIndex });
  }
  return result;
};
```

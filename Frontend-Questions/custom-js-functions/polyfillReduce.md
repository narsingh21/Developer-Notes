# Polyfill of Reduce

## Introduction

The `reduce` method is one of the most powerful array methods in JavaScript. It executes a reducer function for each element of the array, resulting in a single output value. This implementation provides a polyfill (custom implementation) of the native `Array.prototype.reduce` method.

## Context

Understanding reduce is crucial for:

- Array manipulation and transformation
- Functional programming patterns
- Data aggregation
- Interview preparation
- Understanding array methods internals

## Implementation

```javascript
const myReduce = function (callback, initialValue) {
  const array = this;
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  let i = initialValue === undefined ? 0 : 1;

  for (; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};

// Usage - add to Array prototype
Array.prototype.myReduce = myReduce;

// Example usage
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
```

## How It Works

1. **Context (`this`):** The polyfill uses `this` to reference the array it's operating on
2. **Initial Value:** If provided, it's used as the starting accumulator; otherwise, the first element is used
3. **Index Start:** If initial value is provided, start from index 1; otherwise start from index 0
4. **Iteration:** Loop through the array, applying the callback function to accumulate results
5. **Return:** Return the final accumulated value

## Parameters

The callback function receives four parameters:

- `accumulator` - The accumulated value from previous iterations
- `currentValue` - The current element being processed
- `currentIndex` - The index of the current element
- `array` - The entire array being processed

## Usage Examples

```javascript
// Sum of all numbers
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.myReduce((a, b) => a + b, 0)); // 15

// Find maximum value
console.log(numbers.myReduce((a, b) => (a > b ? a : b))); // 5

// Flatten an array of arrays
const nested = [[1, 2], [3, 4], [5]];
console.log(nested.myReduce((a, b) => a.concat(b), [])); // [1, 2, 3, 4, 5]

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const counts = fruits.myReduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { apple: 2, banana: 2, orange: 1 }

// Without initial value
const letters = ['a', 'b', 'c'];
console.log(letters.myReduce((a, b) => a + b)); // 'abc'
```

## Edge Cases

```javascript
// Empty array with initial value
[].myReduce((a, b) => a + b, 0); // 0

// Empty array without initial value - throws error
// [].myReduce((a, b) => a + b); // TypeError: Reduce of empty array with no initial value

// Array with one element
[42].myReduce((a, b) => a + b, 0); // 42
[42].myReduce((a, b) => a + b); // 42
```

## Time and Space Complexity

- **Time Complexity:** O(n) - single pass through the array
- **Space Complexity:** O(1) - constant extra space (excluding the output)

## Common Interview Questions

- How does reduce differ from map and filter?
- What happens when initial value is not provided?
- How would you implement reduceRight?

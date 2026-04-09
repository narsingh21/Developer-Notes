# Memoization (Polyfill for Memo)

## Introduction

Memoization is an optimization technique that caches the results of expensive function calls. When the same inputs are provided again, the cached result is returned instead of re-executing the function. This significantly improves performance for recursive functions and expensive computations.

## Context

Memoization is commonly used for:

- Optimizing recursive algorithms (Fibonacci, factorial)
- Caching API responses
- Reducing expensive computations
- React's useMemo and useCallback
- DP (Dynamic Programming) solutions
- Function performance optimization

## Implementation

```javascript
const myMemo = (fn) => {
  const map = new Map();
  return function (...args) {
    const key = args.toString();

    if (map.has(key)) {
      console.log('From cache:', key);
      return map.get(key);
    }

    const result = fn(...args);
    map.set(key, result);
    return result;
  };
};

// Usage
const newFn = (a, b) => {
  return a + b;
};

const memoize = myMemo(newFn);

console.log(memoize(2, 3)); // Computes: 5, caches it
console.log(memoize(3, 3)); // Computes: 6, caches it
console.log(memoize(2, 3)); // From cache: 2,3 - returns 5
```

## How It Works

1. **Cache Storage:** Use a `Map` to store function results
2. **Key Generation:** Convert arguments to string for use as a cache key
3. **Cache Check:** Before executing, check if the result exists in cache
4. **Return Cached:** If found, return the cached result
5. **Compute & Store:** If not found, execute function and store result

## Parameters

The memoized function accepts:

- Any number of arguments (rest parameters)
- Arguments must be serializable (for key generation)

## Enhanced Implementation

```javascript
// With size limit for cache
const myMemoWithLimit = (fn, limit = 5) => {
  const map = new Map();

  return function (...args) {
    const key = args.toString();

    if (map.has(key)) {
      return map.get(key);
    }

    if (map.size >= limit) {
      // Remove oldest entry (first key)
      const firstKey = map.keys().next().value;
      map.delete(firstKey);
    }

    const result = fn(...args);
    map.set(key, result);
    return result;
  };
};

// With object support
const myMemoWithObjects = (fn) => {
  const map = new WeakMap();

  return function (...args) {
    // For objects, use a custom key approach
    const key = args
      .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : arg))
      .toString();

    if (map.has(fn) && map.get(fn).has(key)) {
      return map.get(fn).get(key);
    }

    if (!map.has(fn)) {
      map.set(fn, new Map());
    }

    const result = fn(...args);
    map.get(fn).set(key, result);
    return result;
  };
};
```

## Time and Space Complexity

- **Time Complexity (cached):** O(1) - constant time lookup
- **Time Complexity (uncached):** O(n) - depends on original function
- **Space Complexity:** O(n) - where n is the number of unique inputs

## Common Use Cases

```javascript
// Fibonacci with memoization
const fibonacci = myMemo((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // Fast with memoization
// Without memoization, this would be extremely slow

// Expensive API call caching
const fetchUserData = myMemo(async (userId) => {
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
});
```

## Common Interview Questions

- What is the difference between memoization and caching?
- What are the limitations of memoization?
- How would you handle objects as arguments?
- How do you clear a memoized cache?
- When should you NOT use memoization?

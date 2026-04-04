# Frontend Interview Questions - Code Snippets

> Practical code implementations for common frontend interview problems including currying, debouncing, memoization, and more.

---

## 📚 Contents

1. [Infinite Currying](#infinite-currying) - Function currying
2. [Highest Commodity Price](#find-highest-commodity-price) - Array processing
3. [Polyfill of Reduce](#polyfill-of-reduce) - Array method
4. [Debouncing](#debouncing) - Event optimization
5. [Polyfill for Memo](#polyfill-for-memo-function) - Caching
6. [Throttling](#throttling) - Rate limiting

---

## Infinite Currying

```javascript
const sum = (value) => {
  const fn = function (nextValue) {
    if (nextValue === undefined) return value;
    value += nextValue;
    return fn;
  };
  return fn;
};

sum(2)(3)(4)(5)();
```

---

## Find Highest Commodity Price

**Problem:** You are given an array of prices where index = time step. For each time step i, find the maximum price from time 0 to i.

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
```

---

## Polyfill of Reduce

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
```

---

## Debouncing

Execute a function after certain timeout.

```javascript
const debouncing = (fn, time) => {
  let timerID = undefined;

  return function (...args) {
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(fn.apply(this, args), 1000);
  };
};
```

---

## Polyfill for Memo Function

- Return a function
- If the function variable not changed, return function from cache
- If the function variable changed, return the new function with updated variable

```javascript
const myMemo = (fn) => {
  const map = new Map();
  return function (...args) {
    if (map.has(args.toString())) {
      console.log(map);
      return map.get(args.toString());
    }
    map.set(args.toString(), fn(...args));
    return fn(...args);
  };
};

const newFn = (a, b) => {
  return a + b;
};

const memoize = myMemo(newFn);
console.log(memoize(2, 3));
console.log(memoize(3, 3));
console.log(memoize(2, 3));
```

---

## Throttling

Execute a function once in a particular time period.

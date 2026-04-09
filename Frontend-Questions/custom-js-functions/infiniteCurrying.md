# Infinite Currying

## Introduction

Infinite currying is an advanced function technique that allows a function to accept an infinite number of arguments through chained function calls. The function keeps accepting arguments until it's called with no arguments (or `undefined`), at which point it returns the final computed result.

## Context

This technique is commonly used for:

- Creating fluent APIs
- Function composition
- Building calculator-like functions
- Practicing functional programming concepts
- Interview preparation

## Implementation

```javascript
const sum = (value) => {
  const fn = function (nextValue) {
    if (nextValue === undefined) return value;
    value += nextValue;
    return fn;
  };
  return fn;
};

// Usage
sum(2)(3)(4)(5)(); // Returns 14
```

## How It Works

1. The initial call `sum(2)` starts with an initial value
2. Each subsequent call `(3)`, `(4)`, `(5)` adds to the accumulating value
3. When called with `undefined` or no argument `()`, it returns the final sum
4. The inner function `fn` acts as a closure, maintaining access to the `value` variable

## Variations

```javascript
// For multiplication
const multiply = (value) => {
  const fn = function (nextValue) {
    if (nextValue === undefined) return value;
    value *= nextValue;
    return fn;
  };
  return fn;
};

multiply(2)(3)(4)(); // Returns 24

// With initial value handling
const calculate = (initialValue) => {
  let total = initialValue;

  return function operator(nextValue) {
    if (nextValue === undefined) return total;
    total += nextValue;
    return operator;
  };
};
```

## Common Interview Questions

- Explain how closures work in this implementation
- What happens if you call `sum()()` without arguments?
- How would you modify this to support different operations?

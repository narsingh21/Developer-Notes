# Polyfills: Apply, Call, Bind

> Custom polyfills for JavaScript's `Function.prototype` methods: `call`, `apply`, and `bind`. These methods are used to control the `this` value of a function and invoke functions with a specific context.

---

## Table of Contents

1. [Overview](#overview)
2. [Polyfill: call](#polyfill-call)
3. [Polyfill: apply](#polyfill-apply)
4. [Polyfill: bind](#polyfill-bind)
5. [Usage Examples](#usage-examples)

---

## Overview

The `call`, `apply`, and `bind` methods are essential for controlling the execution context (`this`) of a function:

| Method    | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| `call()`  | Invokes a function with a given `this` value and arguments passed individually |
| `apply()` | Invokes a function with a given `this` value and arguments passed as an array  |
| `bind()`  | Returns a new function with `this` value bound to a given context              |

---

## Polyfill: call

The `call` method invokes a function with a specified `this` context and arguments provided one by one.

```javascript
const myCall = function (context, ...args) {
  // Handle null/undefined context - use globalThis in non-strict mode
  context = context || globalThis;

  // Create a unique symbol to avoid naming conflicts
  const symbol = Symbol();

  // Assign the function to the context using the unique symbol
  context[symbol] = this;

  // Invoke the function with spread arguments
  const result = context[symbol](...args);

  // Clean up by removing the temporary function
  delete context[symbol];

  // Return the result
  return result;
};

// Attach to Function.prototype
Function.prototype.myCall = myCall;
```

### How it works:

1. Accepts a `context` object and rest parameters (`...args`)
2. Uses a `Symbol` to create a unique property key (avoids conflicts with existing properties)
3. Assigns the function (`this`) to the context object
4. Invokes the function with the provided arguments
5. Cleans up by deleting the temporary property
6. Returns the result

---

## Polyfill: apply

The `apply` method invokes a function with a specified `this` context and arguments provided as an array.

```javascript
Function.prototype.myApply = function (context, argsArray) {
  // Handle null/undefined context
  context = context || globalThis;

  // Create a unique symbol to avoid naming conflicts
  const fnSymbol = Symbol();

  // Assign the function to the context
  context[fnSymbol] = this;

  // Invoke the function with or without arguments
  const result = argsArray
    ? context[fnSymbol](...argsArray)
    : context[fnSymbol]();

  // Clean up by removing the temporary function
  delete context[fnSymbol];

  // Return the result
  return result;
};
```

### How it works:

1. Accepts a `context` object and an optional `argsArray`
2. Uses a `Symbol` to create a unique property key
3. Assigns the function to the context object
4. Conditionally spreads the arguments array if provided
5. Cleans up by deleting the temporary property
6. Returns the result

---

## Polyfill: bind

The `bind` method returns a new function with `this` value bound to the specified context.

```javascript
Function.prototype.myBind = function (context, ...args1) {
  // Return a new function that when called
  return (...args2) => {
    // Combines the initially provided args with the later args
    this.apply(context, [...args1, ...args2]);
  };
};
```

### How it works:

1. Accepts a `context` and initial arguments (`args1`)
2. Returns a new function
3. The returned function accepts additional arguments (`args2`)
4. When invoked, applies the combined arguments using `apply`
5. Creates a closure that retains the original context and arguments

---

## Usage Examples

### Example: Using call

```javascript
function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.name}`);
}

const person = { name: 'John' };

greet.myCall(person, 'Alice');
// Output: Hello, Alice! I'm John
```

### Example: Using apply

```javascript
function introduce(greeting, age) {
  console.log(`${greeting}, I'm ${this.name} and I'm ${age} years old`);
}

const person = { name: 'Emily' };

introduce.myApply(person, ['Hi', 25]);
// Output: Hi, I'm Emily and I'm 25 years old
```

### Example: Using bind

```javascript
function show(message, punctuation) {
  console.log(`${this.value}: ${message}${punctuation}`);
}

const obj = { value: 'Result' };

const boundFn = show.myBind(obj, 'Operation successful');
boundFn('!');
// Output: Result: Operation successful!
```

---

## Key Takeaways

- All three methods allow you to explicitly set the `this` value
- `call` and `apply` invoke the function immediately
- `bind` returns a new function for later use
- Using `Symbol` prevents property name collisions
- The polyfills handle edge cases like `null` or `undefined` context

# JavaScript Interview Questions & Concepts

> Core JavaScript concepts including closures, prototypes, classes, hoisting, and web APIs.

---

## 📚 Contents

1. [Call, Apply, Bind](#call-apply-bind) - `this` context methods
2. [Closure](#closure) - Function scope
3. [Prototype](#prototype-in-javascript) - Object inheritance
4. [Class](#class) - ES6 classes
5. [Hoisting](#hoisting) - Declaration hoisting
6. [Constructor Function](#constructor-function) - Object creation
7. [Web Worker](#web-worker) - Background threads
8. [WebSocket](#websocket) - Real-time communication

---

## Call, Apply, Bind

These methods are used to control the `this` value of a function.

- **call** and **apply** - Invoke the function with `this` value
- **bind** - Returns a new function with `this` value bound

### Polyfill for call

```javascript
const myCall = function (context, ...args) {
  context = context || globalThis;
  const symbol = Symbol();

  context[symbol] = this;
  const result = context[symbol](...args);
  delete context[symbol];
  return result;
};

Function.prototype.myCall = myCall;
```

### Polyfill for apply

```javascript
Function.prototype.myApply = function (context, argsArray) {
  context = context || globalThis;

  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  const result = argsArray
    ? context[fnSymbol](...argsArray)
    : context[fnSymbol]();

  delete context[fnSymbol];
  return result;
};
```

### Polyfill for bind

```javascript
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return fn;
};
```

---

## Closure

- Closures capture variables, not values.
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

---

## Prototype in JavaScript

Each object has an internal link to another object called its prototype.

---

## Class

- Class declarations are not hoisted (or, in some interpretations, hoisted but with the temporal dead zone restriction), which means you cannot use a class before it is declared.
- Perhaps the most important job of a class is to act as a "factory" for objects.
- The instance creation is done by the constructor.
- Static properties are a group of class features that are defined on the class itself, rather than on individual instances of the class.

---

## Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

---

## Constructor Function

These are the function in JS which act as factory for object. They use to create objects. In modern way we can write constructor function with class also but it's syntactic sugar on constructor function. The convention is that these functions start with capital letter (as class but not required).

---

## Web Worker

A Web Worker is a piece of browser functionality. It is the real OS threads that can be spawned in the background of your current page so that it can perform complex and resource-intensive tasks.

- Worker is an API interface that lets you create a thread in the background. We need to pass a parameter, that is a `<worker_file>.js` file. This specifies the worker file the API needs to execute.

```javascript
const worker = new Worker('<worker_file>.js');
```

---

## WebSocket

A WebSocket is a type of communication that happens between two parties/entities using a WebSocket protocol.

```javascript
const socket = new WebSocket('ws://example.com');
```

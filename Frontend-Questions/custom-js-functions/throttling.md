# Throttling

## Introduction

Throttling is a programming technique that limits the execution rate of a function to at most once per specified time interval. Unlike debouncing (which waits for the function to stop being called), throttling ensures a function is called at regular intervals regardless of how frequently it's invoked.

## Context

Throttling is commonly used for:

- Scroll event handlers (performance optimization)
- Window resize events
- Mouse movement tracking
- Rate limiting API calls
- Tracking rapid user interactions
- Implementing game controls

## Problem Statement

Execute a function once in a particular time period.

## Implementation

```javascript
const throttling = (fn, delay) => {
  let lastExecution = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastExecution >= delay) {
      lastExecution = now;
      return fn.apply(this, args);
    }
  };
};

// Usage
const handleScroll = throttling(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', handleScroll);
```

## How It Works

1. **Timestamp Tracking:** Store the timestamp of the last execution
2. **Time Check:** On each call, check if enough time has passed
3. **Execute If Ready:** If the elapsed time is greater than or equal to the delay, execute the function
4. **Update Timestamp:** Update the last execution timestamp
5. **Context Binding:** Use `apply()` to maintain `this` context

## Parameters

- `fn` - The function to throttle
- `delay` - The minimum delay between executions in milliseconds

## Improved Implementation

```javascript
const throttling = (fn, delay) => {
  let lastExecution = 0;
  let timeoutId = null;
  let lastArgs = null;

  return function (...args) {
    const now = new Date().getTime();
    const remaining = delay - (now - lastExecution);

    lastArgs = args;

    if (remaining <= 0) {
      // Execute immediately
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastExecution = now;
      return fn.apply(this, args);
    } else {
      // Execute at the end of the delay period
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          lastExecution = new Date().getTime();
          timeoutId = null;
          fn.apply(this, lastArgs);
        }, remaining);
      }
    }
  };
};

// With leading and trailing options
const throttle = (fn, delay, options = { leading: true, trailing: false }) => {
  let lastExecution = 0;
  let timeoutId = null;
  const { leading, trailing } = options;

  return function (...args) {
    const now = new Date().getTime();
    const remaining = delay - (now - lastExecution);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (leading) {
        lastExecution = now;
        return fn.apply(this, args);
      }
    } else if (trailing && !timeoutId) {
      timeoutId = setTimeout(() => {
        lastExecution = new Date().getTime();
        timeoutId = null;
        return fn.apply(this, args);
      }, remaining);
    }
  };
};
```

## Throttle vs Debounce

| Feature    | Throttle          | Debounce         |
| ---------- | ----------------- | ---------------- |
| Execution  | At intervals      | After delay      |
| First call | Immediate         | Delayed          |
| Last call  | May be delayed    | Immediate        |
| Use case   | Scroll, resize    | Search input     |
| Guarantees | Regular intervals | Single execution |

## Real-world Examples

```javascript
// Scroll tracking
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', handleScroll);

// Resize handling
const handleResize = throttle(() => {
  console.log('Window size:', window.innerWidth, window.innerHeight);
}, 200);

window.addEventListener('resize', handleResize);

// Button click prevention
const throttledSubmit = throttle((formData) => {
  // API call
  fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}, 1000);

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  throttledSubmit(new FormData(e.target));
});
```

## Time and Space Complexity

- **Time Complexity:** O(1) per call (constant time check)
- **Space Complexity:** O(1) - constant extra space

## Common Interview Questions

- What's the difference between throttle and debounce?
- How would you implement a throttle with trailing edge?
- When would you use throttle over debounce?
- How does throttle handle the first call?

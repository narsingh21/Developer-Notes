# Debouncing

## Introduction

Debouncing is a programming technique that limits the rate at which a function can fire. It ensures that a function is only executed after a specified wait time has elapsed since the last time it was invoked. This is particularly useful for optimizing performance by preventing excessive function calls.

## Context

Debouncing is commonly used for:

- Search input optimization (prevent API calls on every keystroke)
- Window resize event handling
- Form validation
- Button click prevention (double-submit)
- Auto-save functionality
- Performance optimization in React applications

## Implementation

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

// Usage
const handleSearch = debouncing((query) => {
  console.log('Searching for:', query);
}, 1000);

handleSearch('h');
handleSearch('he');
handleSearch('hel');
handleSearch('hell');
handleSearch('hello'); // Only this will execute after 1000ms
```

## How It Works

1. **Timer Variable:** Store a reference to the timeout timer
2. **Closure:** The returned function maintains access to `timerID`
3. **Clear Previous:** On each call, clear any existing timer
4. **Set New Timer:** Create a new timer that executes the function after the delay
5. **Context Binding:** Use `apply()` to maintain `this` context

## Parameters

- `fn` - The function to debounce
- `time` - The delay in milliseconds (note: the original has hardcoded 1000ms)

## Improved Implementation

```javascript
const debouncing = (fn, delay) => {
  let timerID = undefined;

  return function (...args) {
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// Usage with leading edge (immediate execution)
const debounceLeading = (fn, delay) => {
  let timerID = undefined;
  let leadingExecuted = false;

  return function (...args) {
    if (!leadingExecuted) {
      fn.apply(this, args);
      leadingExecuted = true;
    }

    clearTimeout(timerID);
    timerID = setTimeout(() => {
      leadingExecuted = false;
    }, delay);
  };
};
```

## Debounce vs Throttle

| Feature      | Debounce      | Throttle        |
| ------------ | ------------- | --------------- |
| Execution    | After delay   | At intervals    |
| Use case     | Search input  | Scroll events   |
| Resets timer | On every call | After execution |

## Common Interview Questions

- What's the difference between debounce and throttle?
- How would you implement a leading-edge debounce?
- What happens if the delay is 0?
- How do you cancel a debounced function?

## Real-world Example

```javascript
// Search input in React
function SearchInput() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debouncing((searchTerm) => {
        // API call
        fetch(`/api/search?q=${searchTerm}`);
      }, 500),
    [],
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return <input value={query} onChange={handleChange} />;
}
```

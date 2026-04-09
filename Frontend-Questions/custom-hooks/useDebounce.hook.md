# useDebounce Hook

## Introduction

The `useDebounce` hook is a custom React hook that delays the execution of a function until after a specified wait time has elapsed since the last time it was invoked. This is particularly useful for optimizing performance by limiting how often a function can fire, such as in search inputs or API calls.

## Context

This hook is commonly used for:

- Debouncing search inputs to reduce API calls
- Delaying expensive operations
- Rate limiting user input
- Optimizing performance for frequent events

## Implementation

```javascript
import { useRef } from 'react';

/**
 * Hook to debounce a function
 * @param {function} value - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {function} The debounced function
 */
const useDebounce = (value, delay) => {
  const timeRef = useRef(undefined);

  return (...args) => {
    console.log(delay);
    if (typeof value === 'function') {
      clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => value(...args), delay);
    }
  };
};

export default useDebounce;
```

## Usage Example

```javascript
import useDebounce from './useDebounce';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleSearch = useDebounce((searchTerm) => {
    // API call with searchTerm
    console.log('Searching for:', searchTerm);
  }, 500);

  return (
    <input
      type='text'
      onChange={(e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value);
      }}
      placeholder='Search...'
    />
  );
}
```

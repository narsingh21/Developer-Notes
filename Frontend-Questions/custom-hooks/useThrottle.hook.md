# useThrottle Hook

## Introduction

The `useThrottle` hook is a custom React hook that limits the execution rate of a function to at most once per specified time interval. Unlike debouncing (which waits for the function to stop being called), throttling ensures a function is called at regular intervals regardless of how frequently it's invoked.

## Context

This hook is commonly used for:

- Rate limiting event handlers
- Controlling scroll event handlers
- Limiting API call frequency
- Throttling mouse movements or resizing
- Ensuring consistent update intervals

## Implementation

```javascript
import { useRef } from 'react';

/**
 * Hook to throttle a function execution
 * @param {function} fn - The function to throttle
 * @param {number} delay - The minimum delay between executions in milliseconds
 * @returns {function} The throttled function
 */
const useThrottle = (fn, delay) => {
  const createdTimeStamp = useRef(new Date());
  return (...args) => {
    const lastTimeStamp = new Date(); // Date.now()
    console.log(lastTimeStamp - createdTimeStamp.current);
    if (lastTimeStamp - createdTimeStamp.current > delay) {
      fn(...args);
      createdTimeStamp.current = lastTimeStamp;
    }
  };
};

export default useThrottle;
```

## Usage Example

```javascript
import useThrottle from './useThrottle';

function ScrollTracker() {
  const handleScroll = useThrottle(() => {
    console.log('Scroll position:', window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <div>Scroll to see throttled logs</div>;
}
```

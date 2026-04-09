# usePrevious Hook

## Introduction

The `usePrevious` hook is a custom React hook that returns the previous value of a state or prop. It's particularly useful when you need to compare the current value with its previous value, such as tracking changes or implementing animations based on value transitions.

## Context

This hook is commonly used for:

- Tracking state changes
- Comparing previous and current values
- Implementing undo/redo functionality
- Triggering animations when values change
- Logging value history

## Implementation

```javascript
import { useRef, useEffect } from 'react';

/**
 * Hook to get the previous value of a state or prop
 * @param {any} value - The current value to track
 * @returns {any} The previous value
 */
const usePrevious = (value) => {
  const prevRef = useRef(undefined);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
};

export default usePrevious;
```

## Usage Example

```javascript
import usePrevious from './usePrevious';

function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

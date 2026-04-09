# useIntersectionObserver Hook

## Introduction

The `useIntersectionObserver` hook is a custom React hook that uses the Intersection Observer API to detect when an element enters or leaves the viewport. This is useful for implementing lazy loading, infinite scrolling, or triggering animations when elements become visible.

## Context

This hook is commonly used for:

- Lazy loading images as they come into view
- Infinite scrolling implementations
- Triggering animations when elements become visible
- Implementing "load more" functionality
- Tracking ad visibility
- Detecting when elements enter the viewport

## Implementation

```javascript
import { useState, useRef, useEffect } from 'react';

/**
 * Hook to detect when an element enters the visible screen
 * @param {Object} options - IntersectionObserver options
 * @returns {[boolean, React.RefObject]} Tuple of isVisible state and element ref
 */
const useIntersectionObserver = (options) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      console.log(entries.isIntersecting);
      setVisible(entries.isIntersecting);
    }, options);

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [isVisible, elementRef];
};

export default useIntersectionObserver;
```

## Usage Example

```javascript
import useIntersectionObserver from './useIntersectionObserver';

function LazyImage({ src, alt }) {
  const [isVisible, ref] = useIntersectionObserver({ threshold: 0.5 });

  return (
    <div ref={ref}>
      {isVisible ? <img src={src} alt={alt} /> : <div>Loading...</div>}
    </div>
  );
}
```

## Notes

- The hook accepts IntersectionObserver options such as `threshold`, `root`, and `rootMargin`
- The `threshold` option (0.5) means the callback triggers when 50% of the element is visible
- The observer is automatically disconnected when the component unmounts
- You can use multiple threshold values for more granular control

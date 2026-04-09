# useClickOutside Hook

## Introduction

The `useClickOutside` hook is a custom React hook that detects clicks or interactions outside of a specified element. This is particularly useful for closing modals, dropdowns, tooltips, or sidebars when users click outside of them.

## Context

This hook is commonly used for:

- Closing modals when clicking outside
- Closing dropdown menus on outside click
- Dismissing tooltips
- Closing sidebar menus
- Auto-dismissal of popovers
- Implementing click-away functionality

## Implementation

```javascript
import { useEffect } from 'react';

/**
 * Hook to detect clicks outside of a specified element
 * @param {React.RefObject} ref - The ref object pointing to the element
 * @param {function} callback - The function to call when clicking outside
 */
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;
```

## Usage Example

```javascript
import useClickOutside from './useClickOutside';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={modalRef} className='modal'>
      <h1>Modal Content</h1>
      <p>Click outside to close</p>
    </div>
  );
}
```

## Notes

- The hook uses the native `contains()` method to check if the click target is outside the referenced element
- Make sure to pass a valid ref object created with `useRef()`
- The callback should be wrapped in `useCallback` or included in dependency arrays to prevent unnecessary re-renders

# useIdle Hook

> A custom hook that detects user inactivity. It determines whether the user is idle based on a specified time interval.

## Parameters

| Name | Type   | Description          |
| ---- | ------ | -------------------- |
| time | number | Time in milliseconds |

## Return Value

| Name   | Type    | Description                               |
| ------ | ------- | ----------------------------------------- |
| active | boolean | `true` if user is idle, `false` otherwise |

## Implementation

```javascript
const useIdle = (time) => {
  const [active, setActive] = useState(false);
  const timerRef = useRef(null);
  const events = [
    'mousemove',
    'mousedown',
    'keydown',
    'touchstart',
    'scroll',
    'wheel',
  ];

  const resetTimer = useCallback(() => {
    setActive(false);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => setActive(true), time);
  }, [time]);

  useEffect(() => {
    resetTimer();

    events.forEach((event) => {
      document.addEventListener(event, resetTimer);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [resetTimer]);

  return active;
};
```

## Usage Example

```javascript
const MyComponent = () => {
  const isIdle = useIdle(3000); // 3 seconds

  return <div>{isIdle ? 'User is idle' : 'User is active'}</div>;
};
```

import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const buttonRef = useRef(null);
  const previousValue = usePrevious(counter);
  const debounceFunction = useThrotlle(
    () => setCounter((prev) => prev + 1),
    10000,
  );
  useClickOutside(buttonRef, () => {
    setCounter(0);
  });

  const [visible, ref] = useIntersectionObserver({ threshold: 0.5 });
  console.log(visible);
  return (
    <div>
      <p>counter : {counter}</p>
      <p>previoustValue :{previousValue}</p>
      <button ref={ref} onClick={() => debounceFunction()}>
        increase
      </button>
    </div>
  );
}

const usePrevious = (value) => {
  const prevRef = useRef(undefined);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
};

// excute a fucntion or updation of  value after certain delay

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

// excute a function or update a value once in a cetain timeInterval

const useThrotlle = (fn, delay) => {
  const createdTimeStamp = useRef(new Date());
  return (...args) => {
    const lastTimeStamp = new Date(); //Date.now()
    console.log(lastTimeStamp - createdTimeStamp.current);
    if (lastTimeStamp - createdTimeStamp.current > delay) {
      fn(...args);
      createdTimeStamp.current = lastTimeStamp;
    }
  };
};

// when clicked outside of element it will close modal, dropdown, tooltip,sidebar.

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

// when element enter in the visible screen it will return true

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

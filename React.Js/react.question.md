# React.js Interview Questions

> A collection of React.js interview questions covering hooks, state management, performance optimization, Redux, Next.js, and more.

---

## 📚 Contents

1. [React Fundamentals Questions](#react-fundamentals-questions)
2. [How React Works Questions](#how-react-works-questions)
3. [useEffect Hook Questions](#useeffect-hook-questions)
4. [Rules for Hooks Questions](#rules-for-hooks-questions)
5. [Class Components Questions](#class-components-questions)
6. [useReducer Hook Questions](#usereducer-hook-questions)
7. [React Router Questions](#react-router-questions)
8. [Context API Questions](#context-api-questions)
9. [Performance Optimization Questions](#performance-optimization-questions)
10. [Redux Questions](#redux-questions)
11. [Next.js Questions](#nextjs-questions)

---

## React Fundamentals Questions

### Why do we need a JavaScript framework?

- Take example of airbnb data, UI mess up - UI data sync up

### What is different between vanilla JavaScript and the framework implementation?

- Data and UI sync

### What is React and React-DOM library?

- React is extremely powerful, declarative, component-based, state-driven JavaScript Library for building complex user interfaces. It's built by Facebook.

### What is destructuring?

- Taking some information out from object and array called destructuring.

### Falsy values

- `0`, `''`, `null`, `undefined`

### What is short circuiting?

- `&&`, `||`, `??`

### Null coalescing operator and OR operator difference

- `??` only treats `null` and `undefined` as false values

### Optional chaining

- `?.` operator used on object for optional chaining

### How React render components in DOM?

- Using react-dom

### What is strict mode in React?

- It's nothing but in strictmode is component of react, inside it we render our app component. During development in strictMode react-dom render our app twice in order to find certain bugs also react check we are using outdated part of react API.

### What is component?

- Components are the basic building block for building UI. Component have the information like data, logic and how to UI look like (Appearance) inside it.

### What is JSX?

- JSX is declarative syntax of writing how to component look like.

### React have separation of components not separation of technology

### What is props?

- Props are used to pass the information from parent to child component.

### What is a side effect?

- Side effect creates when we are changing data which is located outside the component.

### Props are immutable or mutable?

- Immutable

### How to render a list in React?

### What is conditional rendering?

- `&&`, `? :`, using multiple return statement with if statement

### In JSX can we write if else statement?

- No

### What is React Fragment?

- React render a single element, but we don't want create new DOM node so we use react fragment which is not create any new DOM Node

### Why Event handlers should have a function value instead of function call?

- Function call will be immediately called by React when the page loads

### What is state?

- Data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle

### What is controlled element?

- HTML form elements have managed their stats by self, We have to force them to handle their state by react

### Stats vs props difference?

### What is lifting state up?

- When one or more sibling component need a state to access. So we would place it to the first common parent component

### State are mutable or immutable?

### How to do add, delete, update items in React List?

- Add using spread operator, delete using filter function, update using spread operator in map function

### What is derived state?

- The derived state is the state which is computed from an existing props or state.

### What is children props?

- It's a special property of props, which value is passed to the children component between open and closing tags

### Type of component?

- Stateless, stateful, structure component

### What is component composition?

- Combining different component using children props, it create highly reusable and flexible component

### What is element prop?

- Element prop is alternative of children prop, pass the component to another component using element attribute value

### How to set default props?

- Default values to the properties of prop by using destructuring and `=` operator

### How to set hover effect on JSX element?

- Hover effect handled by `onMouseEnter` or `onMouseLeave` events

### How to check prop types?

- With propTypes, we can specify the type of value that we expect the consumer of the component pass in each of the props

---

## How React Works Questions

### Component

- Component is a piece of code in order to describe UI. It is a simple JavaScript function it return React Element

### What is component Instance?

- An instance is like the actual physical manifestation of a component living in our component tree.

### Can we call a component as function call() without JSX?

- Yes we can but we don't, this because now the React sees this component call as a simple written element not a component instance

### How React works?

- Basically React component returns a JSX so each JSX element produce `createReactElement` function call to create React element then these elements are now create in to DOM elements

### React default behavior

- When the component is removed from the tree the state is also removed from the memory.

### What is a key prop?

- It's a special prop which tells the diffing algorithm that this component/element is unique.

### What is side Effect?

- A side effect happens whenever a function depends on any data that is outside the function scope, or modifies data that is outside its scope.

### Pure Function?

- The other important functional concept is pure functions, which are basically functions without side effects.

### What is Render Logic and Event Handler Function?

### State updates Batching

- State updates are batched, renders are not triggered immediately.
- Automatically batches state updates in this way is yet another performance optimization that React gives us out of the box.

### What is event bubbling and event capturing, event propagation, event delegation?

### How event delegation done by React?

- At render phase React places all the event handlers at the root node of the DOM tree.

### How the React events are different from vanilla JS events?

- React uses Synthetic Events instead of directly exposing browser (native) events.

---

## useEffect Hook Questions

### What is stale closure in useEffect?

- Stale closure is bug in JavaScript it created because of JS closure features.

### Why effect use in component?

- It's for synchronized our component to some external system.

### What is clean up function in useEffect?

- Function that we return from effect. Used for cure from race condition.

### What is Race Condition in React?

- If one API call taking time in useEffect on the mean the component re-render then another req for API comes in it arises race condition.

### What is closure and how it works for clean up function?

- Basically a closure in JavaScript means that a function will always remember all the variables that were present at the time and the place data function was created.

### How to use Abort controller in useEffect to cancel API request?

- It's use in cleanup function to abort the API call between re-renders.

### How to do DOM manipulation in React using useEffect?

### How to handle Key press event in React?

- Using useEffect Hook because it interaction with outside system.

---

## Rules for Hooks Questions

1. Hooks should render in the sequence as they had render in last render if you introduce a conditional hook or early return before all hook got executed that will cause a bug in React.

2. Don't update state in upper level code instead of update in event Handler or useEffect.

3. useState takes an argument as set to initial state but React only look for this argument only once when component mounted first time.

4. When an initial value of useState is depends on some sort of computation then we should pass a function in useState. (Lazy initial state)

5. States are immutable we have to return a new state variable in setState.

6. State Update is asynchronous operation which is done in batching.

### What is Ref?

- Ref is a reference which can be used by the useRef hook, the use cases of ref are for preserving a variable across multiple re-renders, select and storing the DOM elements

### What is the difference between ref and state?

### Why ref can't be read write (mutate) current property in render logic?

- It should avoid, it will create miscellaneous consequences.

### Ref in JSX should avoid instead use state.

### What is custom hook in React?

- Basically custom hooks are simple JavaScript functions who contain only the function logic. Sharing logic between components

---

## Class Components Questions

### Why we need to bind methods of class component?

- Because we need to give access to that method of current instance component.

### What is class fields in JavaScript?

- Using the modern JavaScript class fields feature. We can basically declare properties directly on a component instance.

### What is component lifecycle?

- Lifecycle methods are essentially special methods that all React components get access to, and which we can use to run side effects at different points of the component lifecycle.

**Mounting phase:**

- In this phase `componentDidMount` method executed it executed when the component is mounted into the DOM

**Updating phase:**

- `componentDidUpdate` will execute. React will provide it previous prop and previous state

**Unmounting phase:**

- In this phase `componentWillUnmount` will run.

---

## useReducer Hook Questions

- useReducer hook is more advance and more complex way of managing state instead of useState hook. Now useReducer hook works with so called reducer function which is a pure function that takes a previous state and so called action and returns current state.

---

## React Router Questions

### What is SPA?

### What is the difference between NAV Link and the LINK component?

- Nav Link gets a active class when we click on it other inactive link not

### Why we use CSS modules in React?

- To avoid the selection of elements of same class, CSS modules provide a unique class to every class.

### How to make a global class in CSS modules?

- We can make global class by using `global` keyword

### What is index route mean React Router?

- Index router is default route for the parent URL

### How to create children route?

- By placing children routes between the opening and the closing tag of the parent route.

### What is the outlet in React Router?

- Outlet decides where we want to render our child route components into parent component

### How can we store the states into the URL?

- Setting state in URL means is setting params or queryString in URL by React Router hook

### How can we store or set or read query string in URL?

- URL `?querystring` can be set by or read by `useSearchParams()`

### What is the difference between useParams and useSearchParams?

### How to navigate between different routes programmatically and declaratively?

---

## Context API Questions

- Context basically relies on three things:
  - **Provider**: As we know what it does
  - **Value**: It can be a function or state which we want to provide to consumer
  - **Consumer**: Who is consuming the context

### How to implement map in website

### How to implement protected routes in React?

### How to implement authentication?

---

## Performance Optimization Questions

How React Works - when a parent component is re-render then all the child component is re-render again even if the props is still same.

### What is profiler in React DevTools?

- With the profiler, we can basically analyze renders and re-renders.

### What are the different type of optimization in React to improve performance?

- Mainly three types:
  1. Render optimization
  2. Improve app speed and optimization
  3. Reduce bundle size

### How to improve performance optimization of wasted rerenders using children Prop?

- A children prop component passed as argument so it already created for that component so there no re-render happened when call parent render again.

### What is the use of memo?

- Memo is used to memorization the component so if the props of child component don't change then child component not re-render even if parent component is render.

### What is the use case of useMemo in React?

- Memo function not able to memoize the props so it memoize by using `useMemo()`.

### What is the use case of useCallback hook?

- UseCallback hook is used to remember the value of a function which will preserve between re-renders.

### How can we optimize a context?

- Value of context is a object

### How to prevent to create useEffect infinite loops when it dependencies changing every time effect runs?

- Using useCallback and useMemo hooks

### What is optimizing bundle sizing and how to do it using code splitting?

- When client navigate to the application, server send a bundle to client it is a JavaScript file.

### What is lazy loading?

- Lazy returns a React component you can render in your tree.

### What are the rules for using useEffect?

### forwardRef

- forwardRef lets your component expose a DOM node to parent component with a ref.

---

## Redux Questions

### What is Redux?

- Redux is a global state management library. When the state changes in store all the subscribe component will re-render again. Four things in React: action, reducer, store, component.

### What is action creator?

- Redux developer follow a convention to create action. It's a function which returns actions.

### Middleware in Redux

- Middleware in Redux are for doing API calls, we are using thunk

### Thunk

- Is a middleware sits between dispatch and the reducer function

### reSelect library

- It's used in Redux for optimizing out selector function argument in Redux.

### Extra reducer

- They allows to respond the createSlice for action creators that are created besides the action creators of itself.

---

## Next.js Questions

### Why we need SSR (server side render website)?

- The first data fetching happen at server not client which makes initial load of application fast.

### Hydration meaning?

- It's a process where static HTML becomes interactive using JavaScript bundle.

### Hydration Error?

- When React created DOM and SSR DOM is different then hydration error comes in

**Causes:**

1. Incorrect HTML nesting div inside a p
2. Different data used for rendering like server use some other and client have some other for fetch
3. Using Browser API at server
4. Side effects and so on

### What is Next.js

- A React Framework for Web.
- Meta framework built on top of React.
- Opinionated way of building a React framework.

### What are the key Feature of Next.js

- Server side Rendering (dynamic and static Rendering)
- File base Routing Convention.
- Data fetching and mutation on the server.
- Optimization - image, SEO, fonts, preloading.

### Different type of Routing in Next.js? APP Router vs Page Router

1. Implemented in Next.js v13.4 vs Next.js v1 2016
2. Recommended for new project vs legacy way
3. Implement React full stack architecture vs overall more simple
4. Easy fetching with Fetch() in components vs Data fetching happen using fix APIs
5. More advance routing (only APP router)
6. Better Developer and user experience

# React.js Interview Questions & Notes

> A comprehensive guide to React.js including hooks, state management, performance optimization, Redux, Next.js, and more.

---

## 📚 Contents

1. [React Fundamentals](#section-1-react-fundamentals) - Basic concepts
2. [How React Works](#section-2-how-react-works) - Internal architecture
3. [Interview Questions](#interview-questions) - Question bank ([react.question.md](react.question.md))
4. [useEffect Hook](#section-3-useeffect-hook) - Side effects & cleanup
5. [Rules for Hooks](#section-4-rules-for-hooks) - Best practices
6. [Class Components](#section-5-class-components) - Legacy React
7. [useReducer Hook](#section-6-usereducer-hook) - State management
8. [React Router](#section-7-react-router) - Navigation
9. [Context API](#section-8-context) - State sharing
10. [Performance Optimization](#section-9-performance-optimization) - Speed up React apps
11. [Redux](#section-10-redux) - Global state management
12. [Next.js](#section-11-nextjs) - SSR & Server Components
13. [Data Fetching](#section-12-data-fetching-data-streaming-data-rendering) - Suspense & streaming

---

## Section 1: React Fundamentals

> **Note:** Interview questions moved to [react.question.md](react.question.md)

---

## Section 2: How React Works

> **Note:** Interview questions moved to [react.question.md](react.question.md)

---

## Section 3: useEffect Hook

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 4: Rules for Hooks

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 5: Class Components

### Null coalescing operator and OR operator difference

- `??` only treats `null` and `undefined` as false values

### Optional chaining

- `?.` operator used on object for optional chaining

### How React render components in DOM?

- Using react-dom

### What is strict mode in React?

- It's nothing but in strictmode is component of react, inside it we render our app component. During development in strictMode react-dom render our app twice in order to find certain bugs also react check we are using outdated part of react API. Strictmode is not a downbreaking but it still a good idea to render our app in to strict mode.

### What is component?

- Components are the basic building block for building UI. Component have the information like data, logic and how to UI look like (Appearance) inside it.
- A component is abstraction that encapsulate the UI and logic, while the props is a public API for the component by using prop the creators allow consumers to interact with the component.

### What is JSX?

- JSX is declarative syntax of writing how to component look like.

### React have separation of components not separation of technology

### What is props?

- Props are used to pass the information from parent to child component.

### What is a side effect?

- Side effect creates when we are changing data which is located outside the component. Props is located from parent so it can't be modified. React is based on all pure function/pure component which don't create any side effect.

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

- HTML form elements have managed their stats by self, We have to force them to handle their state by react when the react handle the element stats it called the controlled component, keep sync the form elements stats with our component state

### Stats vs props difference?

### What is lifting state up?

- When one or more sibling component need a state to access. So we would place it to the first common parent component

### State are mutable or immutable?

### How to do add, delete, update items in React List?

- Add using spread operator, delete using filter function, update using spread operator in map function

### What is derived state?

- The derived state is the state which is computed from an existing props or state.

### What is children props?

- It's a special property of props, which value is passed to the children component between open and closing tags of children components used for generic component

### Type of component?

- Stateless, stateful, structure component

### What is component composition?

- Combining different component using children props, it create highly reusable and flexible component, fix problem of props drilling

### What is element prop?

- Element prop is alternative of children prop, pass the component to another component using element attribute value on component

### How to set default props?

- Default values to the properties of prop by using destructuring and `=` operator: `{color = '#ffff', size = '25rem', maxRating = 5}`

### How to set hover effect on JSX element?

- Hover effect handled by `onMouseEnter` or `onMouseLeave` events

### How to check prop types?

- With propTypes, we can specify the type of value that we expect the consumer of the component pass in each of the props. We call it type checking. PropTypes is a package in React.

---

## Section 2: How React Works

### Component

- Component is a piece of code in order to describe UI. It is a simple JavaScript function it return React Element

### What is component Instance?

- An instance is like the actual physical manifestation of a component living in our component tree.

### Can we call a component as function call() without JSX?

- Yes we can but we don't, this because now the React sees this component call as a simple written element not a component instance now this can't manage his own state, it violates the React hooks rules. (Never ever do this)

### How React works?

- Basically React component returns a JSX so each JSX element produce `createReactElement` function call to create React element then these elements are now create in to DOM elements

### React default behavior

- When the component is removed from the tree the state is also removed from the memory.

### What is a key prop?

- It's a special prop which tells the diffing algorithm that this component/element is unique. It allow React to distinguish between instances of same component Type.

### What is side Effect?

- A side effect happens whenever a function depends on any data that is outside the function scope, or even more importantly whenever a function modifies data that is outside its scope. Examples of side effects are HTTP requests, reading to the DOM, setting timers and more.

### Pure Function?

- The other important functional concept is pure functions, which are basically functions without side effects. These are functions that do not change any variable outside their scope. Also, when we give a pure function the same input, it'll always return the same output which makes this function predictable.

### What is Render Logic and Event Handler Function?

### State updates Batching

- State updates are batched, renders are not triggered immediately. Which says that there is also batching of multiple setState calls.
- If there are three state variables being updated in the event handler, then React would re-render three times, right? However, this is actually not how it works. So this is not how React updates multiple pieces of state. Instead, these state updates will actually get batched into just one state update for the entire event handler.
- Automatically batches state updates in this way is yet another performance optimization that React gives us out of the box.
- Some time we need urgent a state in React then the solution from escaping from the batching is pass a callback function update state on previous state.
- That's because before React 18, React only did automatic batching in event handlers, but not in situations that happen after a browser event has already happened.
- However, there are certain very important situations in which we do need to update state, long after a browser event, like a click, has happened.
- Examples of that are timeouts and promises, for instance, we might want to run our function only a second after a click event, or we might want to run it after some data has been fetched.
- So before React 18, if this any function was called by a timeout, or by a promise, state updates inside the function would not be batched. Instead, React would actually update the state variables one by one.
- Now another case is handling native events using DOM methods such as addEventListener, where state updates also used to not be batched, but now they are.
- If you ever find yourself in a situation like that, you can just wrap the problematic state update in a `ReactDOM.flushSync` function.

### What is event bubbling and event capturing, event propagation, event delegation?

- Read MDN documents

### How event delegation done by React?

- At render phase React places all the event handlers at the root node of the DOM tree. So events can be handled by at event bubbling phase.

**Behind the scenes:**

- Browser fires native click event
- Event bubbles to React root
- React intercepts it
- React creates a SyntheticEvent
- React finds matching handlers in Fiber tree
- React calls handlers in correct order

### How the React events are different from vanilla JS events or what different between synthetic event and native event?

- All synthetic events are bubbled. The only difference lies between `e.preventDefault` and `onClickCapture`
- React uses Synthetic Events instead of directly exposing browser (native) events.
- Synthetic events are a wrapper around native DOM events that normalize behavior, improve performance, and enable React's event delegation system.

---

## Section 3: useEffect Hook

### What is stale closure in useEffect?

- Stale closure is bug in JavaScript it created because of JS closure features. What happens is that function remembers its parent scope variable even if the parent environment scope is vanished, so in React when dependencies are not written properly then useEffect will remember only parent environment scope variable remember even if it changed due to re-renders.

### Why effect use in component?

- It's for synchronized our component to some external system.

### What is clean up function in useEffect?

- Function that we return from effect. Used for cure from race condition. It clean the effect of last effect. It will run only at a time of re render or at component Unmounting from DOM.

### What is Race Condition in React?

- If one API call taking time in useEffect on the mean the component re-render then another req for API comes in it arises race condition. Cure is clean up function.

### What is closure and how it works for clean up function?

- Basically a closure in JavaScript means that a function will always remember all the variables that were present at the time and the place data function was created. Cleanup function remember all the component variable due to closure. Even after the component unmount from the DOM.

### How to use Abort controller in useEffect to cancel API request?

- It's use in cleanup function to abort the API call between re-renders.

### How to do DOM manipulation in React using useEffect?

### How to handle Key press event in React?

- Using useEffect Hook because it interaction with outside system.

---

## Section 4: Rules for Hooks

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 5: Class Components

2. Don't update state in upper level code instead of update in event Handler or useEffect.

3. useState takes an argument as set to initial state but React only look for this argument only once when component mounted first time. Not in render update

4. When an initial value of useState is depends on some sort of computation then we should pass a function in useState. (Lazy initial state)

5. States are immutable we have to return a new state variable in setState.

6. State Update is asynchronous operation which is done in batching, useState is not directly updating the state instead it happens when the JS engine is free after the execution of the event handler function because JS engine is single thread.

### What is Ref?

- Ref is a reference which can be used by the useRef hook, the use cases of ref are for preserving a variable across multiple re-renders, select and storing the DOM elements

### What is the difference between ref and state?

### Why ref can't be read write (mutate) current property in render logic?

- It should avoid, it will create miscellaneous consequences.

### Ref in JSX should avoid instead use state.

### What is custom hook in React?

- Basically custom hooks are simple JavaScript functions who contain only the function logic. Sharing logic between components

---

## Section 5: Class Components

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 6: useReducer Hook

- Because we need to give access to that method of current instance component.

### What is class fields in JavaScript, How can we use this feature so we can remove boiler plate code of React class component?

- Using the modern JavaScript class fields feature. We can basically declare properties directly on a component instance, right in the class definition, so now this is already bounded outside in function so need of this and bind the functions.

### What is component lifecycle?

- Lifecycle methods are essentially special methods that all React components get access to, and which we can use to run side effects at different points of the component lifecycle. Every component in React own a lifecycle in which there are different different phases -- mounting updating unmounting.

**Mounting phase:**

- In this phase `componentDidMount` method executed it executed when the component is mounted into the DOM, use effect without dependencies, only run at first render

**Updating phase:**

- `componentDidUpdate` will execute. React will provide it previous prop and previous state, it executes every re render, like useEffect hook with dependencies.

**Unmounting phase:**

- In this phase `componentWillUnmount` will run.

---

## Section 6: useReducer Hook

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 7: React Router Now useReducer hook works with so called reducer function which is a pure function that takes a previous state and so called action and returns current state.

```javascript
const [currentState, dispatch] = useReducer(reducerFunction, initialState);
```

---

## Section 7: React Router

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 8: Context

### .eslintrc.json

```json
{ "extends": "react-app" }
```

### vite.config.js

```javascript
import eslint from 'vite-plugin-eslint';
```

### What is SPA?

### What is the difference between NAV Link and the LINK component?

- Nav Link gets a active class when we click on it other inactive link not

### Why we use CSS modules in React?

- To avoid the selection of elements of same class, CSS modules provide a unique class to every class.

### How to make a global class in CSS modules?

- We can make global class by using `global` keyword so it will be applied on to every element having that class name. Syntax: `:global(.class)`

### What is index route mean React Router?

- Index router is default route for the parent URL

### How to create children route?

- By placing children routes between the opening and the closing tag of the parent route.

### What is the outlet in React Router?

- Outlet decides where we want to render our child route components into parent component

### How can we store the states into the URL?

- Setting state in URL means is setting params or queryString in URL by React Router hook (`useSearchParams()`) or to props of link attribute

### How can we store or set or read query string in URL?

- URL `?querystring` can be set by or read by `useSearchParams()`

### What is the difference between useParams and useSearchParams?

### How to navigate between different routes programmatically and declaratively using useNavigation and `<Navigation/>` component?

---

## React Router with Data Fetching

If we want to use new data fetching and loading capabilities in React Router then we should use the `createBrowserRouter` feature in React Router.

### What is loader prop in React Router?

- We can fetch data using Loader prop in React Router. Receive the value using `useLoaderData()` hook.

### Difference between navigation and navigate in React Router?

### Actions in React Router

- Basically actions are use to mutate or change the Remote State in React Application.

### useRouterError, useNavigation() hook

- `useNavigation` hook tells everything about the navigation of the page, so we to build page navigation pending indicator and optimistic UI on data mutation.

### Form in React Router

- Form is element which allow us to pass the data into action for mutation of data without state management and handler functions.

### redirect function

- Used to redirect request to the server.

### useActionData() hook

- Used for fetching the error from the action functions

### useFetcher() hook

- Used to mutate/get the data without navigation page. The React Router library is giving the mutate the data of get data on navigation so without navigation we can do it using the useFetcher hook.

---

## Section 8: Context

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 9: Performance Optimization

- **Provider**: As we know what it does
- **Value**: It can be a function or state which we want to provide to consumer
- **Consumer**: Who is consuming the context

### How to implement map in website

### useNavigation for removing to go back to login page again

```javascript
useNavigation('path', replace: true)
```

### How to implement protected routes in React?

### How to implement authentication section?

---

## Section 9: Performance Optimization

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 10: Redux It can be a big drawback in performance.

### What is profiler in React DevTools?

- With the profiler, we can basically analyze renders and re-renders. So we can see which components have rendered, see why they're rendered, and also how long each render took.

### What are the different type of optimization in React to improve performance?

- Mainly three types:
  1. Render optimization
  2. Improve app speed and optimization
  3. Reduce bundle size

### How to improve performance optimization of wasted rerenders using children Prop?

- A children prop component passed as argument so it already created for that component so there no re-render happened when call parent render again.

### What is the use of memo?

- Memo is used to memorization the component so if the props of child component don't change then child component not re-render even if parent component is render.
- But there is issue with memo function when we pass object or function the child component wrapped in memo function it will render if props not changed because when memo compare two prev props and current props in JS object and function are not same even if they are same memo is fail only works for primitive values.

### What is the use case of useMemo in React?

- Memo function not able to memoize the props so it memoize by using `useMemo()`. It will store the values in React memory so React utilizes it. It will preserve the values between the re-renders and returned values from cache.

### What is the use case of useCallback hook?

- UseCallback hook is used to remember the value of a function which will preserve between re-renders. So then memo function compares it.

### How can we optimize a context?

- Value of context is a object

### How to prevent to create useEffect infinite loops when it dependencies changing every time effect runs?

- Using useCallback and useMemo hooks

### What is optimizing bundle sizing and how to do it using code splitting?

- When client navigate to the application, server send a bundle to client it is a JavaScript file (which bundled by the Vite or Webpack).
- If it huge it takes time to download at client side. Code splitting as name says takes the bundle and split it in to multiple parts, as the application need they are download over time this process called lazy loading. It is really performance gain.

### What is lazy loading?

- Lazy returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use `<Suspense>` to display a loading indicator while it's loading.

### What are the rules for using useEffect?

### forwardRef

- forwardRef lets your component expose a DOM node to parent component with a ref.

---

## Section 10: Redux

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 11: Next.js

- Redux is a global state management library. When the state changes in store all the subscribe component will re-render again. Four things in React: action, reducer, store, component.

### What is action creator?

- Redux developer follow a convention to create action. It's a function which returns actions. Example: `dispatch(actionCreator())`

### Middleware in Redux

```bash
npm i redux-thunk
```

- Middleware in Redux are for doing API calls, we are using thunk, action creator we return a function whose return the action for store, it received by Redux a dispatch and getState as argument.

### Thunk

- Is a middleware sits between dispatch and the reducer function, thunk is the native way of writing action creators in Redux Toolkit.

### reSelect library

- It's used in Redux for optimizing out selector function argument in Redux.

### Extra reducer

- They allows to respond the createSlice for action creators that are created besides the action creators of itself. Example the thunk action creators are not create implicitly by the createSlice method. It has a builder callback function which is use to call the original reducer functions.

---

## Section 11: Next.js

> **Note:** Questions moved to [react.question.md](react.question.md)

---

## Section 12: Data Fetching

- The first data fetching happen at server not client which makes initial load of application fast. User doesn't need to wait till spinner.

### Hydration meaning?

- It's a process where static HTML becomes interactive using JavaScript bundle. HTML hydrate with JS bundle.

**Render an application at server side** - Create an HTML code but when it executed at client side it's not interactive so we need hydration for interactivity.

**After the website or HTML painted at client** - React creates a component tree at client side and compare it with SSR DOM they must be same so React will adopt the SSR DOM. Now React doesn't need to paint the Application to Browser React is adopted already painted application (React connect all the event listeners and interactivity to the SSR application).

### Hydration Error?

- When React created DOM and SSR DOM is different then hydration error comes in this will create hydration error. This will create a bad user experience.

**Causes:**

1. Incorrect HTML nesting div inside a p
2. Different data used for rendering like server use some other and client have some other for fetch
3. Using Browser API at server
4. Side effects and so on

### What is Next.js

- A React Framework for Web.
- Meta framework built on top of React.
- Opinionated way of building a React framework.
- Allow us build complex full stack app.
- Allow us to use cutting edge React features that need to be integrated into a framework: Suspense, Server Components, Server Action, Streaming.

### What are the key Feature of Next.js

- Server side Rendering (dynamic and static Rendering)
- File base Routing Convention.
- Data fetching and mutation on the server.
- Optimization - image, SEO, fonts, preloading.

### Different type of Routing in Next.js? APP Router vs Page Router

1. Implemented in Next.js v13.4 vs Next.js v1 2016
2. Recommended for new project vs legacy way
3. Implement React full stack architecture vs overall more simple
4. Easy fetching with Fetch() in components vs Data fetching happen using fix APIs getStaticProps and getServerSideProps
5. Easy to create layout and loaders vs layouts are pretty confusing to implement
6. More advance routing (only APP router)
7. Better Developer and user experience
8. Caching is aggressive and pretty confusing

### What are the React Server Component?

- These type of component are new part of React component tree. These component executed at server not at client. Server component don't have interactivity. So 0 JS required to them.
- Now there are two type of component in React - server and client component. In Next.js server component are default component.

### Client server boundary?

- `use client` keyword is basically creates a boundary between client and server component. It creates a client subtree where children of that element doesn't need to use 'use client' keyword. This tree will execute at client side only.

### Import vs Render?

- Import means one component import another one using import syntax.
- Render means one component call another component or one component execute the other component.

### Client component vs Server component

| Client Component                                                                      | Server Component                                          |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Can use state                                                                         | Can't use state                                           |
| Can lift state                                                                        | Can't lift state                                          |
| Props can use                                                                         | Serialize props can use (function and classes can't pass) |
| Both can fetch data                                                                   | Both can fetch data                                       |
| Only import client component (can't go back in client server boundary)                | Both component can import                                 |
| Can render client and server component but server component should be passed as props | Can render both client and server component               |
| Re-render when the state changes                                                      | Re-render when the URL (navigation) of server changes     |

### Loading.js

- Globally available for any data which is loading. It replaces the file with the concerned loading then loading with the concerned data using streaming.

### Traditional React Rendering

- Writing React component then React create a tree of component instance then execute them. We call it render by calling component function. This will create a React tree or virtual DOM. All the changes then pass to React DOM and then DOM.

### RSC Rendering

- React create a virtual DOM at server we call it RSC payload. The RSC payload contains the React Element (Server component executed) and placeholder where client component tree executes. This RSC payload sent at client. Then client side React creates a full virtual DOM with React Element and now on the process go on as traditional React.

### Final Summary

- Initial Render happen at server side HTML generated using SSR and sends at the client.
- With HTML, RSC payload and multiple JS bundles also sends to client so only client component can hydrated.
- SSR happen only for initial or first render then onward it works as RSC Render.
- When the server component re-render every time a RSC payload sends to client not generated HTML.
- Data fetching happen into server component. Only if necessary to fetch at client then fetch at client.

### Theory About client and server Boundary

- In RSC environment we don't need the API for data sending to client side, most of the time.
- A component Instance can be both server and client it depends where it imported.

### RSC environment importing vs rendering

1. For importing there is dependency tree vs for rendering there is client tree
2. Client component can import only client component (can't go back to client server boundary) vs server component can import client and server component both
3. Client can render client and server component (which are passed as prop only). Server component can render server and client component.

### How to set Meta tag using Next?

### How to set Favicon using Next.js?

- icon.png/jpg any file in folder

### How set Font for our Application?

### How to Image component works in Next.js?

- Next.js optimises the image according to viewport at client.

### Q. Fiber Tree

- The fiber tree is basically an internal representation of each component instance and DOM element of our app. It is mutable data structure which is never destroyed.

---

## Section 12: Data Fetching, Data Streaming, Data Rendering

### Suspense Summary

- If some component is fetching data or its doing some activity which can be suspended the component. So In the Reconciliation phase the that component or its tree is replaced by the Suspense component.
- The difference between the loader.js and suspense is loader is executed inside the component and suspense render instead of component.

### How Suspense work internally

- React creates Fiber tree React tracks all state and changes. There is React built in component in Activity which internally have both the component and Suspense component. Default activity === 'visible' so component show. If it suspended it will replace with invisible and Suspense component show.
- In React suspense never shows again (once shown) if it's wrapped in transition on React. Next.js pageNavigation is wrapped in transition so in next we have to reset suspense with a unique key prop.

### How to suspense knows that the component is suspended?

- Component returns a promise by this the suspense know that the component is suspense.

### How to Generate Dynamic Route?

- Given a folder name in `[name]`. Access it in props as `{params} = {name: 'routeno'}`

### How to generate dynamic metadata?

```javascript
export function generateMetadata({ params }) {
  return { ...metadataObj };
}
```

### Error Boundary

- Error boundary can be created using `error.js` file. It will catch only render error not the callback errors also it might not catch the root layout errors also. For global layout error we have to create `global-error.js` file where we have to decide all meta tag other boiler plates also.

### Not-found error

- `not-found.js` page will appear for this type error `notFound()`

### Data Rendering

- Next.js is React framework so rendering is done by the React by RSC payload and virtual DOM.
- Both client and server side component render at server on the initial render.
- Next.js server side rendering split in routes.
- Each route can be static (also called pre-render) or dynamic route.
- There is also partial pre rendering (PPR) which mixes dynamic and static route in same route.

### Static Rendering vs Dynamic Rendering

- HTML is generated at built time or periodically in the background by refetching the data (ISR Incremental Static Regeneration)

### Static route are cached at CDN

- Dynamic route become serverless function. This serverless functions computing doesn't happen at central server like traditional node.js project it happen at edge Networks. This edge Network is distributed around the world.

### generateStaticParams()

- The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
- Every page for respective params is generated at build time.

### SSG (Static Side Generation)

- It works only when all the routes are static.
- Enable a static export, change the output mode inside `next.config.js`
- Static Generation ships the RSC payload from server to client.
- Images are not work in SSG.

---

## Additional Topics

### How to detect memory leaks

**Chrome DevTools**

- Performance → Memory
- Heap snapshot before & after navigation

**React DevTools**

- Watch components not unmounting

**Console warning:**

- Can't perform a React state update on an unmounted component

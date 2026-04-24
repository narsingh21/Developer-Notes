## JavaScript Snippet Questions

---

### Question 1: Event Loop & Promise Execution Order

What is the output order of the following code?

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve()
  .then(() => {
    console.log('3');
    return Promise.resolve('4');
  })
  .then((res) => console.log(res));

Promise.resolve().then(() => console.log('5'));

console.log('6');
```

#### Answer:

```
1 → 6 → 3 → 5 → 4 → 2
```

#### Explanation:

1. `console.log('1')` executes first (synchronous code)
2. `setTimeout` is registered with Web API (will execute after 0ms)
3. First `Promise.resolve().then()` is added to microtask queue
4. Second `Promise.resolve().then()` is added to microtask queue
5. `console.log('6')` executes (synchronous code)
6. Event loop checks microtask queue - both `.then()` callbacks run
7. `console.log('3')` runs first, returns Promise.resolve('4')
8. Chained `.then()` runs, outputting '4'
9. `console.log('5')` runs
10. Finally, setTimeout callback runs, outputting '2'

**Order: 1 → 6 → 3 → 5 → 4 → 2**

---

### Question 2: Async/Await with Promises

What is the output order?

```javascript
const beanTypes = ['kidney', 'black', 'pinto', 'garbanzo', 'lima'];

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];

      console.log(`2. I bought ${beanType} beans`); //4
      resolve(beanType);
    }, 1000);
  });
};

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans(); //
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`); //3
}

getBeans();

console.log('4. beans are bought!');
```

#### Answer:

1. Heading to the store to buy beans...
2. beans are bought!
3. I bought [random bean] beans
4. Great! I'm making [random bean] beans for dinner tonight!

#### Explanation:

1. `getBeans()` is called synchronously, so "1. Heading to the store to buy beans..." prints first.
2. The `await shopForBeans()` pauses the async function and returns a Promise. Meanwhile, the synchronous code continues executing.
3. `console.log("4. beans are bought!")` runs immediately after `getBeans()` is called (still in the same tick), so it prints second.
4. The `setTimeout` is placed in the Web API queue for 1 second (1000ms).
5. After 1 second, the callback executes: it picks a random bean type and logs "2. I bought X beans", then resolves the Promise.
6. When the Promise resolves, the async function resumes and logs "3. Great! I'm making X beans for dinner tonight!".

**Order: 1 → 4 → 2 → 3**

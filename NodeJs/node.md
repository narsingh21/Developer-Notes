# Node.js Notes & Interview Questions

> A comprehensive guide to Node.js backend development, REST APIs, Express, Authentication, Security, and advanced concepts.

---

## 📚 Contents

1. [Introduction](#introduction) - Node.js basics and architecture
2. [Quick Start](#quick-start) - Hello World example
3. [REST API](#rest-api) - RESTful API concepts
4. [Middleware](#middleware) - Express middleware
5. [Error Handling](#error-handling) - Error management
6. [Authentication](#authentication) - JWT, bcrypt, security
7. [Interview Questions](#interview-questions) - Common Node.js Q&A
8. [Security Section](#security-section) - Best practices
9. [Advanced Node.js](#advanced-nodejs) - V8, libUV, Event Loop
10. [Mongoose](#mongoose) - MongoDB ODM
11. [Clustering](#clustering) - Performance & PM2
12. [Performance](#performance) - Optimization tips

---

## Introduction

Node.js is open source server environment built on Chrome V8 JavaScript engine for executing JavaScript code outside browser. It provides event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable cross platform environment to build server-side application in JavaScript.

### REPL

Node.js comes with REPL (Read Eval Print Loop) is an environment like Unix and CMD. User can interact with Node with commands.

### Global Objects

Global objects are built in objects they are part of JavaScript, Node.js global objects are available in all modules, they can be used without importing them.

**Examples:**

- Buffer
- Process
- Global (global namespace var)
- Console
- Timer functions
- Require method
- Exports
- Dirname

### Modules

Modules are logically encapsulated functional code, we can import and export them for use. They can be:

- Core modules
- Local modules
- Third party modules

---

## Quick Start

```javascript
var http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('Application is running on server');
    res.end('You are at server side');
  })
  .listen(8080, () => {
    console.log('Server is running');
  });
```

---

## REST API

### What is API?

A piece of software can be used by another piece of software, in order to allow them to talk to each other.

### What is REST API?

REST is an architecture we build API according to that. REST is based on resources. We are applying HTTP methods to do CRUD operations.

**Example Resources:**

- `http://localhost:8080/api/v1/movies` - GET, POST, PATCH, DELETE, UPDATE
- `http://localhost:8080/api/v1/users` - GET, POST, PATCH, DELETE, UPDATE

---

## Middleware

Middleware is between request-response cycle. Used to check or modify the requests.

### Param Middleware

Param middleware listens for an ID then executes the middleware on this then next.

---

## Router

```javascript
// Basic routing
app.get('/api/v1/movies', getAllMovies);
app.get('/api/v1/movies/:id', getMovie);
app.post('/api/v1/movies', createMovie);
app.patch('/api/v1/movies/:id', updateMovie);
app.delete('/api/v1/movies/:id', deleteMovie);
```

### Mounting a Router

```javascript
// Create separate routers for each resource
const movieRouter = express.Router();
app.use('/api/v1/movies', movieRouter);
movieRouter.route('/').get().post();
```

### Server Static Files

```javascript
app.use(express.static('pathname'));
```

---

## Environment Variables

Environment variables are global variables to set the environment in which Node is running.

---

## Controller Flow

### Step 1: Filter Request Object

Exclude page, sort, limit fields.

```javascript
const queryObj = { ...req.query };
const excludeFields = ['page', 'sort', 'limit', 'fields'];
excludeFields.forEach((el) => delete queryObj[el]);
```

### Step 2: Filtering Operators

Convert query string operators to MongoDB operators.

```javascript
// req.query = { page: '2', ratingAverage: { gte: '4' } }
let queryStr = JSON.stringify(queryObj);
queryStr = queryStr.replace(/\b(lte|lt|gte|gt)\b/g, (match) => `$${match}`);
await MyModel.find({ name: 'john', age: { $gte: 18 } });
```

### Step 3: Sorting

Check if there is any sorting, default we set create at.

### Step 4: Fields Selection

Check any fields are selected or not, apply select method, default exclude `__v`.

### Step 5: Pagination

Set pagination with page limit logic, skip values, limit method to limiting documents.

### Step 6: Execute Query

Finally execute the query.

---

## Error Handling

### Using ndb

ndb is a debugger tool which is introduced by Google for debugging our code.

### Error Handling Middleware

For error handling in Express we have to define an error handling middleware. This middleware has four arguments so Express will recognize that it an error handling middleware.

### Global Error Mechanism

Create an AppError class, this class will create error for us. Where ever the error is creating we will call error controller there.

### Async Function Error Handling

Async function error handling is managed by the `catchAsync` function. It takes the function as argument and returns a function.

### Unhandled Rejection

Handle database shutdown to not crash our application. We have to shut down our application then it will start again by host platform or some other people.

```javascript
process.on('unhandledRejection', () => {
  // Handle shutdown
});
```

---

## Authentication

### Used Modules

- bcryptjs
- validator

### Password Security

- Strongly encrypt user password in database
- Strongly encrypt password reset token in database

### Authentication Flow

1. Create signup route using JSON Web Token to log in the user
2. Create login routes - for password matching as they bcrypted so we use instance method collection document
3. Protect movies routes by adding protecting middleware
4. Authorization according to user roles and permissions - give only admin access to some routes
5. Password reset functionality

### Password Reset

1. User sends email to reset password
2. Find the user
3. Create a token (use crypto) for user and send it to user
4. Save encrypted version of token in database
5. Send token via Email using node mailer
6. Reset password according to token

---

## Interview Questions

### 1. What is promisify in Node.js?

### 2. What is environment for application?

Environment is context for our application where we can decide variable for each environment.

### 3. How can we decide fixed type values in MongoDB?

By using enum variable and assigning values as an array.

### 4. What is an Event Loop in Node.js?

Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.

### 5. Differentiate between process.nextTick() and setImmediate()?

### 6. How would you use a URL module in Node.js?

The URL module in Node.js provides various utilities for URL resolution and parsing. It is a built-in module that helps split up the web address into a readable format.

### 7. Control flow in Node.js?

### 8. What is the buffer class in Node.js?

Buffer class stores raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data.

### 9. What is callback hell?

Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug. Improper implementation of the asynchronous logic causes callback hell.

---

## Security Section

### Brute Force Attacks

- Use bcrypt to make login request slow
- Implement rate limiting - limit the number of requests from a single IP
- Implement maximum login attempts

### Cross Site Scripting (XSS) Attacks

- Store JWT in cookie only not in the localStorage
- Sanitize user input data

### Additional Security

1. **Cookie**: A piece of data which server sends to the client. Client or browser can't access or modify the cookie they can only sent it or receive.
2. **Rate Limiting**: It's a way of preventing from brute force and denial service attack. When too many requests from a single IP then we can limit it to our application.
3. **Secure HTTP Headers**: Using helmet package it automatically add some secure headers to our sent response.
4. **Data Sanitization**: Preventing some malicious code to enter into our DB from request body. There are two types of attack:
   - NoSQL Query Injection
   - Data sanitization against Cross-Side Script
5. **Parameter Pollution?**

---

## Advanced Node.js

### V8 Engine

- V8 project engine is open source project which is created by Google which allow us execute JS outside browser.
- V8 translates or interprets the JS code which we write on JavaScript into C++.

### libUV (C++ Library)

- The libuv project is a C++ open-source project that gives Node access to the operating systems, underlying filesystem. It gives us access to networking, and it also handles some aspects of concurrency as well.

### Thread

- Thread are the sequence of instruction which are going to be executed by CPU core. Deciding which thread is need to executing referred as scheduling. Scheduling is controlled by your Operating System.
- Two ways to improve:
  - Add more core to machine
  - OS needs to identify big pause in processing in expensive input and output system.

---

## Mongoose

### Create Model

```javascript
const Model = mongoose.model('ModelName', schema);
```

### Three Ways to Execute Query

```javascript
query.exec((err, result) => console.log(result));
query.then((result) => console.log(result));
const result = await query();
```

### Running Query using Model

```javascript
Model.find({ name: 'narsingh', city: 'noida' }, 'name address', { skip: 5 });
await Model.findById(id).exec();
Model.findByIdAndDelete(id);
Model.findByIdAndUpdate(id, update);
Model.findOne({ name: 'narsingh' });
Model.findOneAndDelete({ name: 'narsingh' });
```

### Aggregation

An aggregation pipeline consists of one or more stages that process documents. Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.

---

## Event Loop

Every single time the event loop runs its refer to as single tick.

### How Node.js Application Works in Node Environment

```javascript
const pendingTimer = [];
const pendingOsOperation = [];
const pendingLongRunningOperation = [];

function NodeProgram() {
  // code
}

function shouldContinue() {
  // Check 1: Any pending setTimeout, setInterval, setImmediate?
  // Check 2: Any pending OS Task? (like listening on a Port)
  // Check 3: Any long running task which is pending.
}

function eventLoop(shouldContinue) {
  // One tick executes body:
  // 1. Node looks at timer - check if any timer is completed, execute that timer (setInterval, setTimeout)
  // 2. Node looks at pending OS operations or long running operation then execute their callbacks also.
  // 3. Pause execution and wait for:
  //    - New pending OS task has to done
  //    - A new pending operation done
  //    - A timer has to done
  // 4. Node looks at setImmediate
  // 5. Handle any close event
}
```

**Important Notes:**

- `shouldContinue` executes every time after tick
- When we start a Node program the libuv creates the thread pool automatically

### Thread Pool

#### Edit Thread Pool Size

```javascript
process.env.UV_THREADPOOL_SIZE = 5;
```

#### Can we use thread pools to execute our JS code?

Yes, we can write custom JS that uses the thread pool.

#### What functions use the thread pool?

- All fs module functions
- Some crypto functions
- Also depends on OS (Windows or Linux)

#### How does the thread pool set up in the event loop?

Tasks pending are run by the thread pool and executed by the event loop.

#### Libuv OS Delegation

- Node.js and libuv doesn't do the Network request. The actual OS request is done by the OS system. So there is no use of thread pool or event loop in this scenario.

#### Which Node.js functions use OS async Helper feature?

- Almost Network related stuff uses this OS async Helper
- Network request, network response, event listener on network

#### How the OS async Helpers relate to Event Loop?

- These tasks are shown in the Pending OS Task of Application to Event Loop

#### How to increase Node application performance?

- By clustering: make multiple copies of our Node application
- By using thread pool

---

## Clustering

### Blocking the Event Loop

If there is something which blocks the event loop like some performance intensive task (executing a lot of JavaScript code) then our next works around like DB fetching, any other task will be blocked.

For escaping these kind of scenarios in cluster environment our application gets multiple instances of our application. It has their pros and cons.

### Cluster Manager

- Responsible for our Node clusters health
- It creates and manages the cluster worker instances
- `cluster` module is required for creating clusters

```javascript
cluster.fork();
```

### PM2

It's an open source cluster management system.

```bash
# Start application using cluster
pm2 start index.js -i 0

# PM sets the number of cluster to number of logical core of your application
pm2 list - health list
pm2 show index - detail info about child
pm2 monit - show logs
pm2 delete index[application name] - delete the app or stop all child
```

### Workers Pool

- `webworker-thread` is third party library

---

## Performance Optimization

### How to increase the performance of DB querying?

- Using indexing
- Using some caching server

### Redis

Redis is in-memory data store. A tiny database which stores in our machine which allows you to read and write data very quickly.

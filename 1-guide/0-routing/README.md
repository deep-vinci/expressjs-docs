# Routing

#### Common `app` methods

there are middlewares, which means these methods have access to res, req, next functions and then there are route handlers which determine what to do when a user visits certain URL

- `app.get()`
- `app.post()`
- `app.route()` - can chain `.get` `.post` to it to reduce the duplication
- `app.use()` -
 

#### Route path pattern matching

- `/ab?cd` - matches `acd` and `abcd`
- `/ab+cd` - matches `abcd`, `abbcd`, `abbbcd` ...
- `/ab*cd` - matches `abcd`, `abxcd`, `abRANDOMcd`, `ab123cd`  ...
- `/ab(cd)?e` - matches `abe`, `abcde`


#### Middle wares usage

using multiple functions


```js
app.get('/example/b', (req, res, next) => {
  console.log('This runs first!');
  next(); // Move to the next function
}, (req, res) => {
  res.send('Hello from B!'); // This sends the response
});
```

Using an Array of Functions


```js
const cb0 = (req, res, next) => {
  console.log('CB0');
  next(); // Move to the next function
};

const cb1 = (req, res, next) => {
  console.log('CB1');
  next(); // Move to the next function
};

const cb2 = (req, res) => {
  res.send('Hello from C!'); // This sends the response
};

app.get('/example/c', [cb0, cb1, cb2]);
```

Mixing Functions and Arrays


```js
const cb0 = (req, res, next) => {
  console.log('CB0');
  next(); // Move to the next function
};

const cb1 = (req, res, next) => {
  console.log('CB1');
  next(); // Move to the next function
};

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('This runs after CB0 and CB1!');
  next(); // Move to the next function
}, (req, res) => {
  res.send('Hello from D!'); // This sends the response
});
```

example for the middle ware uses

```js
const express = require('express');
const app = express();
app.use(express.json());

// Middleware to validate request data
const validateRegistration = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }
  next();
};

// Middleware to check if the email is already registered
const checkEmailExists = (req, res, next) => {
  const { email } = req.body;
  const userExists = false; // Simulate a database check
  if (userExists) {
    return res.status(400).send('Email already registered');
  }
  next();
};

// Route handler to create the user
const createUser = (req, res) => {
  const { email, password } = req.body;
  // Simulate saving the user to the database
  res.status(201).json({ message: 'User created', email });
};

// Route for user registration
app.post('/register', validateRegistration, checkEmailExists, createUser);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```
# 1. JavaScript

This includes modern JavaScript syntax such as ES6. To ensure everything works with old browsers it is recommended to use something like Babel to transpile modern JS into legacy JS.

- [1. JavaScript](#1-javascript)
  - [1.1. Variable Declaration](#11-variable-declaration)
  - [1.2. Functions](#12-functions)
    - [1.2.1. Arrow Functions](#121-arrow-functions)
    - [1.2.2. Flavors of Arrow Functions](#122-flavors-of-arrow-functions)
    - [1.2.3. Context difference of arrow functions and standard functions](#123-context-difference-of-arrow-functions-and-standard-functions)

## 1.1. Variable Declaration

Don't use the keyword "var" anymore. Always use only "const" or "let", const is immutable and let is mutable. However, for arrays and other non primitive types, use const, even if you are changing the array, such as adding or remove elements, as the reference always remains the same.

Code example:

```javascript
const array = [];
let string = "Hello";
const immutable = 5;
let mutable = 5;

array.push(10);
string = string.concat(" World");
// [INVALID] immutable = 10;
mutable += 10;

console.log(array);
console.log(string);
console.log(immutable);
console.log(mutable);
```

## 1.2. Functions

Functions are declared with the keyword "function", such as:

```javascript
function (parameter1, parameter2){
  return parameter1 + parameter2;
}

function (parameter1, parameter2){
  console.log(parameter1 + parameter2);
  // Returning something is not mandatory
}
```

### 1.2.1. Arrow Functions

Arrow functions are used a lot in JavaScript, and it's almost just a short way to write a function "in-place".

Lets say we have a function that receives another function as parameter and then calls it, such as:

```js
function f1(anotherFunction) {
  anotherFunction();
}

// VALID USAGE:
function printHello() {
  console.log("Hello");
}

f1(printHello); // will print Hello in the console
```

However, there's a shorter way to write this that is:

```js
function f1(anotherFunction) {
  anotherFunction();
}

f1(() => {
  console.log("Hello");
}); // will print Hello in the console
```

Here, we declared and passed a function to f1, that simply prints hello.

### 1.2.2. Flavors of Arrow Functions

We have:

```js
// Standard
(parameter) => {
  return parameter * 2;
};

// Single parameter don't need to be within ()
parameter => {  
  return parameter * 2;
};

// one line functions  can be written as:
parameter =>  parameter * 2;

// CAVEAT:: For returning complex structures such as an object without using the keyword return, use ( ) to wrap the function body instead of { }
parameter => ( { name: parameter,
                 age: 55
               } );

```

### 1.2.3. Context difference of arrow functions and standard functions

One small caveat about arrow vs regular functions is the context, used with the keyword "this", they behave differently in a quite confusing way.

For more information about it: [Almighty this, demystified](https://dillionmegida.com/p/this-demystified/)


# React Spotlight DS&A Arrays and Objects

## Getting Started

- Use this repo as a template and save it to your own github
- run `npm install` following by `npm run test:watch`
- as you get tests passing by updating the code in index.js, remove the `.skip` in the test file (test/index.test.js) one at a time to reveal the next failing test

## Reference vs. Value

Javascript variables can store two types of data -- primitives and reference. The primitive data types are `Number`, `String`, `Boolean`, `Undefined`, `Null` `Symbol` and `BigInt`. The reference type is `Object`. Plain objects, arrays, functions and others are all objects in Javascript.

The following example demonstrates the difference between variables that have primitive data versus reference data.

```js
let a = 5
let b = a
console.log(`a: ${a}, b: ${b}`)
// lets change the value of a
a = 10
console.log(`a: ${a}, b: ${b}`)
```

Notice that when a changes, b stays the same. In contrast, lets try this with an array (a reference type):

```js
let a = [1, 2, 3]
let b = a
console.log(`a: ${a}, b: ${b}`)
a.push(4)
console.log(`a: ${a}, b: ${b}`)
```

When a gets modified, b also gets modified.

## Spread Syntax (...)

Reference vs value is important in React because React state should be _immutable_. You should always return a NEW value when setting state in React. This happens automatically with primitive data types but with objects and arrays, you need to create copies of the old state. An easy way to do this is using `spread` syntax.

```js
let a = [1, 2, 3]
let b = [...a]
a.push(4)
console.log(`a: ${a}, b: ${b}`)
```

Now when a is modified, b stays the same because its pointing to an entirely different object.

In React we can pass a callback when setting state to access the previous state and then use spread syntax to create a new value.

```js
const [nums, setNums] = useState([1, 2, 3, 4])
setNums((prevState) => [...prevState, 4])
```

## Rest Parameters

Rest parameter syntax is similar to Spread syntax in that it uses 3 dots, but in some ways it does the opposite. Instead of spreading out the elements of an object, it collects them up into an array.

```js
const myFunction = (a, b, ...rest) => {
  console.log(`a: ${a}, b: ${b}, rest: ${rest}`)
}
myFunction(1, 2, 3, 4, 5)
```

This is helpful if you have a function that can accept any number of arguments. _Note that only the last parameter in a function definiton can be a rest parameter and a function definition can only have one rest parameter_

## Destructuring Assignment

Destructuring allows you "to unpack values from arrays or properties from objects into distinct variables"<sup>1</sup>. We have seen this in React when using the `useState` syntax and when passing props to Child components.

```js
const [a, b] = [1, 2]
console.log(`a: ${a}, b: ${b}`)
```

<sup>1</sup> MDN Destructuring

## Resources

- [Value vs. Reference](https://dmitripavlutin.com/value-vs-reference-javascript/#:~:text=In%20JavaScript%2C%20you%20can%20pass,by%20reference%20when%20assigning%20objects.)

- [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

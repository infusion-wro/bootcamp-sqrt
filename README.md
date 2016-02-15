# bootcamp-sqrt

Introductory bootcamp task.

## Goals

- Get familiar with:
  - Basic JS
  - Node and npm
  - JS testing tools
- Have fun

## Task

Implement the sqrt function that calculates an approximation of the square root function using the [Newthon's method](https://en.wikipedia.org/wiki/Newton's_method).

To calculate the square root of `x`, pick a value `y` (e.g. 1, 2, 3, etc.) and apply the following rule multiple times (e.g. 10):
`y = y - (y^2 - x) / 2y`. The resulting `y` value is the approximation.

_Dos:_
- Modify the body of the sqrt function
- Add helper functions/variables in the sqrt module
- Add more test cases
- Try to do as few iterations as possible (i.e. check if `y` is changing and return the value if not)

_Don'ts:_
- Remove or modify existing test cases
- Modify the sqrt function signature and exports

## Running

- Clone this repository
- Open terminal, cd into the projects directory and run `npm install`
- Run `npm test` to start mocha in watch mode

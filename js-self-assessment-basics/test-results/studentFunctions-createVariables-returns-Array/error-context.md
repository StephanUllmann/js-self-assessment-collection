# Test info

- Name: createVariables() >> returns Array
- Location: /home/stephan/coding/wbs/self-assessment/js-basics/tests/studentFunctions.test.js:30:7

# Error details

```
Error: expect(received).not.toEqual(expected) // deep equality

Expected: not ["cR3aTe s0Me v@r1aBl3s", 42.0000000000024, 2025-05-13T09:00:17.113Z]

    at /home/stephan/coding/wbs/self-assessment/js-basics/tests/studentFunctions.test.js:32:25
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import {
   3 |   createVariables,
   4 |   myNumber as mN,
   5 |   myObject as mO,
   6 |   myString as mS,
   7 |   myArray as mA,
   8 |   divide,
   9 |   canRideBigRollerCoaster,
   10 |   calculate,
   11 |   logIceCreamOrders,
   12 |   countTypes,
   13 | } from '../src/studentFunctions.js';
   14 |
   15 | test.describe('createVariables()', () => {
   16 |   test.skip(createVariables() === 'NOT IMPLEMENTED', 'createVariables() is not implemented');
   17 |
   18 |   test('returns Number', () => {
   19 |     const { myNumber } = createVariables();
   20 |     expect(myNumber).not.toBe(mN);
   21 |     expect(typeof myNumber).toBe('number');
   22 |   });
   23 |
   24 |   test('returns String', () => {
   25 |     const { myString } = createVariables();
   26 |     expect(myString).not.toBe(mS);
   27 |     expect(typeof myString).toBe('string');
   28 |   });
   29 |
   30 |   test('returns Array', () => {
   31 |     const { myArray } = createVariables();
>  32 |     expect(myArray).not.toEqual(mA);
      |                         ^ Error: expect(received).not.toEqual(expected) // deep equality
   33 |     expect(myArray).toBeInstanceOf(Array);
   34 |   });
   35 |
   36 |   test('returns Object', () => {
   37 |     const { myObject } = createVariables();
   38 |     expect(myObject).not.toEqual(mO);
   39 |     expect(myObject).toBeInstanceOf(Object);
   40 |   });
   41 | });
   42 |
   43 | test.describe('divide()', () => {
   44 |   test.skip(divide() === 'NOT IMPLEMENTED', 'divide() is not implemented');
   45 |   const cases = [
   46 |     [42, 2, 21],
   47 |     [10, 5, 2],
   48 |     [145378304000, 283942, 512000],
   49 |     [145378304000, 0, 'Division by Zero'],
   50 |   ];
   51 |
   52 |   for (const [a, b, expected] of cases) {
   53 |     test(`divide(${a}, ${b}) -> ${expected}`, () => {
   54 |       expect(divide(a, b)).toBe(expected);
   55 |     });
   56 |   }
   57 | });
   58 |
   59 | test.describe('canRideBigRollerCoaster()', () => {
   60 |   test.skip(canRideBigRollerCoaster() === 'NOT IMPLEMENTED', 'canRideBigRollerCoaster() is not implemented');
   61 |
   62 |   const cases = [
   63 |     [122, true],
   64 |     [123, true],
   65 |     [121, false],
   66 |     ['Not a number', undefined],
   67 |     [true, undefined],
   68 |     [{}, undefined],
   69 |   ];
   70 |
   71 |   for (const [a, expected] of cases) {
   72 |     test(`canRideBigRollerCoaster(${a}) -> ${expected}`, () => {
   73 |       expect(canRideBigRollerCoaster(a), `Supposed ${a} to result in "${expected}"`).toBe(expected);
   74 |     });
   75 |   }
   76 | });
   77 |
   78 | test.describe('calculate()', () => {
   79 |   test.skip(calculate() === 'NOT IMPLEMENTED', 'calculate() is not implemented');
   80 |   const cases = [
   81 |     [42, 2, '+', 44],
   82 |     [42, 2, '-', 40],
   83 |     [42, 2, '*', 84],
   84 |     [42, 2, '/', 21],
   85 |     [42, 2, 'bullshit', undefined],
   86 |     [42, 2, true, undefined],
   87 |     [42, 0, '/', Infinity],
   88 |   ];
   89 |
   90 |   for (const [a, b, op, expected] of cases) {
   91 |     test(`calculate(${a}, ${b}, ${op}) -> ${expected}`, () => {
   92 |       expect(calculate(a, b, op)).toBe(expected);
   93 |     });
   94 |   }
   95 | });
   96 |
   97 | test.describe('logIceCreamOrders()', () => {
   98 |   test.skip(logIceCreamOrders() === 'NOT IMPLEMENTED', 'logIceCreamOrders() is not implemented');
   99 |   const cases = [
  100 |     [
  101 |       [1, 'Chocolate', true, [], 'Strawberry', 999.99, null],
  102 |       ['Chocolate', 'Strawberry'],
  103 |     ],
  104 |     [
  105 |       ['Vanilla', 'Vanilla', 'Vanilla', 0, 'Stracciatella'],
  106 |       ['Vanilla', 'Vanilla', 'Vanilla', 'Stracciatella'],
  107 |     ],
  108 |     [
  109 |       ['Cheescake Smurfs', 123, 'Noisette', 'Vanilla', Math.PI, { not: 'valid' }],
  110 |       ['Cheescake Smurfs', 'Noisette', 'Vanilla'],
  111 |     ],
  112 |   ];
  113 |   let loggedMessages = [];
  114 |   let originalConsoleLog = console.log;
  115 |   test.beforeEach(() => {
  116 |     loggedMessages = [];
  117 |     originalConsoleLog = console.log;
  118 |     console.log = (message) => {
  119 |       loggedMessages.push(message);
  120 |     };
  121 |   });
  122 |
  123 |   test.afterEach(() => {
  124 |     console.log = originalConsoleLog;
  125 |   });
  126 |
  127 |   for (const [c, expected] of cases) {
  128 |     test(`logIceCreamOrders([${c[0]},...]) -> ${expected}`, () => {
  129 |       logIceCreamOrders(c);
  130 |       expect(loggedMessages).toEqual(expected);
  131 |     });
  132 |   }
```
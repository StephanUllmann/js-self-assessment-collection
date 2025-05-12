import { test, expect } from '@playwright/test';
import { add, fibonacci, isPrime } from '../src/studentFunctions.js';

test.describe('add()', () => {
  test('adds positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });
});

test.describe('fibonacci()', () => {
  test('first six numbers', () => {
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });
});

test.describe('isPrime()', () => {
  const cases = [
    [2, true],
    [3, true],
    [4, false],
    [17, true],
    [21, false]
  ];

  for (const [n, expected] of cases) {
    test(`isPrime(${n}) → ${expected}`, () => {
      expect(isPrime(n)).toBe(expected);
    });
  }
});

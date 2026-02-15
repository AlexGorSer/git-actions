import { expect, test } from 'vitest'
import { sum, noSum } from './sum.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
  
})

test('adds 1 - 1 to equal 0', () => {
  expect(noSum(1, 1)).toBe(0)
})
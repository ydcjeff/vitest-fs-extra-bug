// failed with fs-extra
import { readFileSync } from 'fs-extra'
// uncomment below line and it passed
// import { readFileSync } from 'fs'
import { test, expect } from "vitest";

const txt = readFileSync('text.txt', 'utf-8').trim()

test('should pass', () => {
  expect(txt).toEqual('pass')
})

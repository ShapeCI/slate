import { Point } from '@shapeci/slate'

export const input = {}
export const test = value => {
  return Point.isPoint(value)
}
export const output = false

import { Operation } from '@shapeci/slate'

export const input = {
  path: [0],
  properties: {},
  newProperties: {},
}
export const test = value => {
  return Operation.isOperation(value)
}
export const output = false

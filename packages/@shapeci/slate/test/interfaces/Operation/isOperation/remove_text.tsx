import { Operation } from '@shapeci/slate'

export const input = {
  type: 'remove_text',
  path: [0],
  offset: 0,
  text: 'string',
}
export const test = value => {
  return Operation.isOperation(value)
}
export const output = true
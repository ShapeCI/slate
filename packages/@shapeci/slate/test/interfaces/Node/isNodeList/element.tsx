import { Node } from '@shapeci/slate'

export const input = {
  children: [],
}
export const test = value => {
  return Node.isNodeList(value)
}
export const output = false

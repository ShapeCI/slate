import { Node } from '@shapeci/slate'

export const input = []
export const test = value => {
  return Node.isNodeList(value)
}
export const output = true
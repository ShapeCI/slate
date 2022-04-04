/** @jsx jsx  */
import { Node } from '@shapeci/slate'
import { jsx } from '@shapeci/slate-hyperscript'

export const input = <text>one</text>
export const test = value => {
  return Node.string(value)
}
export const output = `one`

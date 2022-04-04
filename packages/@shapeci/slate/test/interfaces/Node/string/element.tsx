/** @jsx jsx  */
import { Node } from '@shapeci/slate'
import { jsx } from '@shapeci/slate-hyperscript'

export const input = (
  <element>
    <text>one</text>
    <text>two</text>
  </element>
)
export const test = value => {
  return Node.string(value, [1])
}
export const output = `onetwo`

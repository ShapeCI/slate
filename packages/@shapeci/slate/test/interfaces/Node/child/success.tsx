/** @jsx jsx  */
import { Node } from '@shapeci/slate'
import { jsx } from '@shapeci/slate-hyperscript'
import { cloneDeep } from 'lodash'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)
export const test = value => {
  return Node.child(value, 0)
}
export const output = cloneDeep(input.children[0])

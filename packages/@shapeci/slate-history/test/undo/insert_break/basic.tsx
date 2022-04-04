/** @jsx jsx */
import { cloneDeep } from 'lodash'
import { jsx } from '../..'

export const run = editor => {
  editor.insertBreak()
}
export const input = (
  <editor>
    <block>
      <block>
        on
        <cursor />e
      </block>
      <block>two</block>
    </block>
  </editor>
)
export const output = cloneDeep(input)

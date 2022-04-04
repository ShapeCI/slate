/** @jsx jsx */
import { Transforms } from '@shapeci/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertText(editor, 'a')
}
export const input = (
  <editor>
    <block>
      <anchor />
      first paragraph
    </block>
    <block>
      second
      <focus /> paragraph
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      a<cursor /> paragraph
    </block>
  </editor>
)

/** @jsx jsx */
import { Transforms } from '@shapeci/slate'
import { cloneDeep } from 'lodash'
import { jsx } from '../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block>
      <text />
      <inline a>
        o<anchor />
        ne
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline b>
        tw
        <focus />o
      </inline>
      <text />
    </block>
  </editor>
)
export const skip = true // TODO: see https://github.com/ianstormtaylor/slate/pull/4188
export const output = cloneDeep(input)

/** @jsx jsx */
import { Transforms } from '@shapeci/slate'
import { cloneDeep } from 'lodash'
import { jsx } from '../..'

export const run = editor => {
  Transforms.delete(editor)
}
export const input = (
  <editor>
    <block a>
      o<anchor />
      ne
    </block>
    <block b>
      tw
      <focus />o
    </block>
  </editor>
)
export const skip = true // TODO: see https://github.com/ianstormtaylor/slate/pull/4188
export const output = cloneDeep(input)
/** @jsx jsx */
import { Editor, Transforms } from '@shapeci/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.setNodes(
    editor,
    { someKey: true },
    { match: n => Editor.isInline(editor, n) }
  )
}
export const input = (
  <editor>
    <block>
      <text />
      <inline>
        <anchor />
        word
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        <focus />
        another
      </inline>
      <text />
    </block>
  </editor>
)
export const output = (
  <editor>
    <block>
      <text />
      <inline someKey>
        <anchor />
        word
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        <focus />
        another
      </inline>
      <text />
    </block>
  </editor>
)
/** @jsx jsx */
import { Transforms } from '@shapeci/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.liftNodes(editor, { match: n => n.c })
}
export const input = (
  <editor>
    <block a>
      <block b>
        <block c>
          <cursor />
          one
        </block>
      </block>
    </block>
  </editor>
)
export const output = (
  <editor>
    <block a>
      <block c>
        <cursor />
        one
      </block>
    </block>
  </editor>
)
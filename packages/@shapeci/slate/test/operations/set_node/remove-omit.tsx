/** @jsx jsx */
import { jsx } from '@shapeci/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text someKey />
    </element>
  </editor>
)

export const operations = [
  {
    type: 'set_node',
    path: [0, 0],
    properties: { someKey: true },
    newProperties: {},
  },
]

export const output = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)

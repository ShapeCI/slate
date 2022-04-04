/** @jsx jsx */
import { Transforms } from '@shapeci/slate'
import { jsx } from '@shapeci/slate-hyperscript'

export const input = (
  <editor>
    <element>
      a<cursor />
    </element>
  </editor>
)

export const operations = [
  {
    type: 'set_selection',
    oldProperties: {},
    newProperties: { custom: 123 },
  },
]

export const output = (
  <editor>
    <element>
      a<cursor />
    </element>
  </editor>
)

Transforms.setSelection(output, { custom: 123 })

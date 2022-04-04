import { createEditor, Descendant } from '@shapeci/slate'
import { withHistory } from '@shapeci/slate-history'
import { Editable, Slate, withReact } from '@shapeci/slate-react'
import React, { useMemo, useState } from 'react'

const PlainTextExample = () => {
  const [value, setValue] = useState<Descendant[]>(initialValue)
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable placeholder="Enter some plain text..." />
    </Slate>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
]

export default PlainTextExample

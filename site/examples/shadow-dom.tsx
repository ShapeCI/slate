import { createEditor, Descendant } from '@shapeci/slate'
import { withHistory } from '@shapeci/slate-history'
import { Editable, Slate, withReact } from '@shapeci/slate-react'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

const ShadowDOM = () => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current!.shadowRoot) return

    // Create a shadow DOM
    const outerShadowRoot = container.current!.attachShadow({ mode: 'open' })
    const host = document.createElement('div')
    outerShadowRoot.appendChild(host)

    // Create a nested shadow DOM
    const innerShadowRoot = host.attachShadow({ mode: 'open' })
    const reactRoot = document.createElement('div')
    innerShadowRoot.appendChild(reactRoot)

    // Render the editor within the nested shadow DOM
    ReactDOM.render(<ShadowEditor />, reactRoot)
  })

  return <div ref={container} data-cy="outer-shadow-root" />
}

const ShadowEditor = () => {
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
    children: [{ text: 'This Editor is rendered within a nested Shadow DOM.' }],
  },
]

export default ShadowDOM

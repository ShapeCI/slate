import { Descendant,Editor,Node } from '@shapeci/slate'
import React,{ useCallback,useEffect,useRef,useState } from 'react'
import { FocusedContext } from '../hooks/use-focused'
import { useIsomorphicLayoutEffect } from '../hooks/use-isomorphic-layout-effect'
import { SlateContext } from '../hooks/use-slate'
import {
  getSelectorContext,
  SlateSelectorContext
} from '../hooks/use-slate-selector'
import { EditorContext } from '../hooks/use-slate-static'
import { ReactEditor } from '../plugin/react-editor'
import { EDITOR_TO_ON_CHANGE } from '../utils/weak-maps'

/**
 * A wrapper around the provider to handle `onChange` events, because the editor
 * is a mutable singleton so it won't ever register as "changed" otherwise.
 */

export const Slate = (props: {
  editor: ReactEditor
  value: Descendant[]
  children: React.ReactNode
  onChange: (value: Descendant[]) => void
}) => {
  const { editor, children, onChange, value, ...rest } = props
  const unmountRef = useRef(false)

  const [context, setContext] = React.useState<[ReactEditor]>(() => {
    if (!Node.isNodeList(value)) {
      throw new Error(
        `[Slate] value is invalid! Expected a list of elements` +
          `but got: ${JSON.stringify(value)}`
      )
    }
    if (!Editor.isEditor(editor)) {
      throw new Error(
        `[Slate] editor is invalid! you passed:` + `${JSON.stringify(editor)}`
      )
    }
    editor.children = value
    Object.assign(editor, rest)
    return [editor]
  })

  const {
    selectorContext,
    onChange: handleSelectorChange,
  } = getSelectorContext(editor)

  const onContextChange = useCallback(() => {
    onChange(editor.children)
    setContext([editor])
    handleSelectorChange(editor)
  }, [onChange])

  EDITOR_TO_ON_CHANGE.set(editor, onContextChange)

  useEffect(() => {
    return () => {
      EDITOR_TO_ON_CHANGE.set(editor, () => {})
      unmountRef.current = true
    }
  }, [])

  const [isFocused, setIsFocused] = useState(ReactEditor.isFocused(editor))

  useEffect(() => {
    setIsFocused(ReactEditor.isFocused(editor))
  })

  useIsomorphicLayoutEffect(() => {
    const fn = () => setIsFocused(ReactEditor.isFocused(editor))
    document.addEventListener('focus', fn, true)
    return () => document.removeEventListener('focus', fn, true)
  }, [])

  useIsomorphicLayoutEffect(() => {
    const fn = () => setIsFocused(ReactEditor.isFocused(editor))
    document.addEventListener('blur', fn, true)
    return () => {
      document.removeEventListener('focus', fn, true)
      document.removeEventListener('blur', fn, true)
    }
  }, [])

  return (
    <SlateSelectorContext.Provider value={selectorContext}>
      <SlateContext.Provider value={context}>
        <EditorContext.Provider value={editor}>
          <FocusedContext.Provider value={isFocused}>
            {children}
          </FocusedContext.Provider>
        </EditorContext.Provider>
      </SlateContext.Provider>
    </SlateSelectorContext.Provider>
  )
}
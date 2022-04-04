import { Element } from '@shapeci/slate'

export const input = {
  type: 'paragraph',
  children: [{ text: '' }],
}
export const test = value => Element.isElementType(value, 'paragraph')

export const output = true

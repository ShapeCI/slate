import { Element } from '@shapeci/slate'

export const input = {}
export const test = value => {
  return Element.isElement(value)
}
export const output = false
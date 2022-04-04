import { Text } from '@shapeci/slate'

export const input = [
  {
    children: [],
  },
]
export const test = value => {
  return Text.isTextList(value)
}
export const output = false

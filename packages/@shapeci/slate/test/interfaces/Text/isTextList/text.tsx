import { Text } from '@shapeci/slate'

export const input = {
  text: '',
}
export const test = value => {
  return Text.isTextList(value)
}
export const output = false
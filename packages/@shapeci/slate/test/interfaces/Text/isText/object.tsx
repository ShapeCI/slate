import { Text } from '@shapeci/slate'

export const input = {}
export const test = value => {
  return Text.isText(value)
}
export const output = false

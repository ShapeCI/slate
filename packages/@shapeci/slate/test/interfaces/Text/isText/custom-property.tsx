import { Text } from '@shapeci/slate'

export const input = {
  text: '',
  custom: true,
}
export const test = value => {
  return Text.isText(value)
}
export const output = true

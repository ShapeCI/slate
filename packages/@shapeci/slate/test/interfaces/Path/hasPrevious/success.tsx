import { Path } from '@shapeci/slate'

export const input = [0, 1]
export const test = path => {
  return Path.hasPrevious(path)
}
export const output = true
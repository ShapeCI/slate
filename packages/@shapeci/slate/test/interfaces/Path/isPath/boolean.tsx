import { Path } from '@shapeci/slate'

export const input = true
export const test = path => {
  return Path.isPath(path)
}
export const output = false

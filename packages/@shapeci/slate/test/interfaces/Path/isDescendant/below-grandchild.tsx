import { Path } from '@shapeci/slate'

export const input = {
  path: [0, 1],
  another: [],
}
export const test = ({ path, another }) => {
  return Path.isDescendant(path, another)
}
export const output = true

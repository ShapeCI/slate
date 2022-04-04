import { Path } from '@shapeci/slate'

export const input = {
  path: [0, 1],
  another: [],
}
export const test = ({ path, another }) => {
  return Path.relative(path, another)
}
export const output = [0, 1]

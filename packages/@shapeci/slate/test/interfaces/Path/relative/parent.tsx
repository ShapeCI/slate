import { Path } from '@shapeci/slate'

export const input = {
  path: [0, 1],
  another: [0],
}
export const test = ({ path, another }) => {
  return Path.relative(path, another)
}
export const output = [1]
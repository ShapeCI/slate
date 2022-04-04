import { BaseRange,BaseText } from '@shapeci/slate'
import { ReactEditor } from './plugin/react-editor'

declare module '@shapeci/slate' {
  interface CustomTypes {
    Editor: ReactEditor
    Text: BaseText & {
      placeholder?: string
    }
    Range: BaseRange & {
      placeholder?: string
    }
  }
}

// declare module 'react-uuid'
// declare module 'react-helmet'
declare global {
  export type ObjectOf<T> = { [key: string]: T }
  export type Possibly<T> = {
    [P in keyof T]?: unknown
  }
  export type Result<T> = { success: true; data: T } | { success: false; error: Error }
  // export { t } from '../helpers/translate'
  export const global: typeof globalThis
}

type Action = {
  type: string
  payload: any
}

export {}

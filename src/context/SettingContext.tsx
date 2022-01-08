/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { createContext, useReducer, ReactNode } from 'react'

type SettingState = {
  locale: string
  scheme: string
  error: Error | null
}

const initialState: SettingState = {
  locale: 'en',
  scheme: 'light',
  error: null,
}

const reducer = (state: SettingState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_LOCALE':
      return {
        ...state,
        locale: action.payload,
      }
    case 'UPDATE_SCHEME':
      return {
        ...state,
        scheme: action.payload,
      }
    default:
      throw new Error()
  }
}

export const SettingContext = createContext({})

export const SettingContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <SettingContext.Provider value={[state, dispatch]}>{children}</SettingContext.Provider>
}

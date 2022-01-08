import React, { useReducer, createContext, ReactNode } from 'react'

type Activity = {
  name: string
  description: string
  duration: number
  break: number
  lap: number
}

type ActivityState = {
  activities: Activity[]
  loading: boolean
  error: Error | null
}

export const ActivityContext = createContext({})

const initialState: ActivityState = {
  activities: [],
  loading: false,
  error: null,
}

const reducer = (state: ActivityState, action: Action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return {
        ...state,
        activities: [...state.activities, action.payload],
      }
    case 'REMOVE_ACTIVITY':
      return {
        ...state,
        activities: state.activities.filter((activity) => activity.name !== action.payload),
      }
    default:
      throw new Error()
  }
}

export const ActivityContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <ActivityContext.Provider value={[state, dispatch]}>{children}</ActivityContext.Provider>
}

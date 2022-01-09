import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import appReducer from './app.slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    // add more reducers
  },
  middleware: (getDefaultMiddleware) =>
    __DEV__ ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

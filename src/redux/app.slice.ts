/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
  me: {},
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.checked = payload.checked
    },
    saveMe: (state, { payload }) => {
      state.me = payload.me
    },
  },
})

export const { actions } = appSlice
export const { authenticate, saveMe } = appSlice.actions

export default appSlice.reducer

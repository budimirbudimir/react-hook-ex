import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

import {
  // AppThunk,
  RootState,
} from '../../app/store'

interface RegisterState {
  submitting: boolean
}

const initialState: RegisterState = {
  submitting: false
}

// REDUCER
export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.submitting = action.payload;
    },
  },
})

// REDUCER METHODS EXPORTS
export const { setSubmitting } = registerSlice.actions

// THUNK ACTIONS

// SELECTORS
export const getSubmitting = (state: RootState) => state.register.submitting

// REDUCER EXPORT
export default registerSlice.reducer

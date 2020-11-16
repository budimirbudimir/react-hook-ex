import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import registerReducer from '../features/register/registerSlice'

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

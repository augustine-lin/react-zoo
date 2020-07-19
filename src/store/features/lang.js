import { createSlice } from '@reduxjs/toolkit'

const langSlice = createSlice({
  name: 'lang',
  initialState: 'zh_TW',
  reducers: {
    changeLanguage: (state, action) => {
      console.log(action)
      console.log(state)
      return action.payload.lang
    }
  }
})

// action
export const { changeLanguage } = langSlice.actions
// reducer
export default langSlice.reducer

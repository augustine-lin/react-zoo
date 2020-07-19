import { combineReducers } from 'redux'
import langReducer from './features/lang'

export default combineReducers({
  // key是state的名稱
  lang: langReducer
})

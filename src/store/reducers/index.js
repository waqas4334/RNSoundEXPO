import { combineReducers } from "redux"
import authReducer from "./AuthReducers"
import notificationReducer from './notificationReducer'
import hybridgeyserReducer from './hybridgeyserReducer'


const combinedReducers = combineReducers({
  authReducer,
  notificationReducer,
  hybridgeyserReducer
})

export default combinedReducers

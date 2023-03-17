
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import combinedReducers from "./reducers"

import AsyncStorage from "@react-native-async-storage/async-storage"

import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage" // defaults to localStorage for web
const storage = AsyncStorage
const persistConfig = {
  key: "root",
  storage,

}
const middlewares = [thunk]

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
export const persistor = persistStore(store)


export default store

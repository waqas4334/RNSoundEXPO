import types from "../constants"

import AsyncStorage from "@react-native-async-storage/async-storage"

const initState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  users: null,
  regLoading: false,
  registeration: null,
  AuthMessage: null
}

const authReducer = (state = initState, action) => {




  const storeData = async value => {
    try {
      let savedToken = await AsyncStorage.setItem("userToken", value)
    } catch (e) {
      console.log("failed to store token", e)
    }
  }

  const deleteToken = () => {
    AsyncStorage.removeItem('userToken')
      .then(() => {
        console.log("The Token has been removed")
      })
      .catch((error) => {
        console.log("Failed to remove token")
      });
  }

  switch (action.type) {

    case types.USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case types.REGISTER_SUCCESS:
      console.log("register REDUCER hit", action.payload)
      // alert(action.payload.message)
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        registeration: action.payload
      }

      case types.REGISTER_FAIL:
        alert("failed to register")
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          isLoading: false
        }

        case types.LOGIN_SUCCESS:
          console.log("login reducer hit ")
          storeData(action.payload.token)
    
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false,
            token: action.payload.token,
            users: action.payload.user,
    
          }
    
        case types.LOGIN_FAIL:
          console.log("action.payload.data", action.payload.data)
          return {
            ...state,
    
            isLoading: false,
            token: null,
            AlertMessage: action.payload.data
          }


          
    case types.CLEAR_STATES:

      return {
        ...state,
        token: null,
        isAuthenticated: false
      }
  




    case types.LOGOUT_SUCCESS:
      deleteToken("")
      return {
        ...state,
        isAuthenticated: false,
        token: null

      }


    case types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }

      case types.LAST_LOGIN :
        console.log('DATA +++++++++42 AUTH REDUCER',action.payload)
         return {
             ...state,
             isAuthenticated : true,
             isLoading : false,
             user : action.payload
         }
    case types.CLEAR_REG:
      return {
        ...state,
        registeration: null
      }




    case types.LOGOUT_SUCCESS:

    case types.LOADING_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case types.AUTHSET:
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default authReducer

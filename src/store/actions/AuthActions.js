import axios from "axios"
import types from "../constants"
import utils from "../../utils/urls"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Stack, Alert, IconButton, HStack, VStack, CloseIcon, Text, Center, NativeBaseProvider } from "native-base";
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Linking,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Dimensions
} from "react-native"


export const makeConfig = async type => {
  const token = await AsyncStorage.getItem("userToken")
  // console.log(token)
  const config = {
    headers: {
      "content-type": type,
      auth: token
    }
  }

  return config
}
const url = utils.url
export const register = (
  // value,
  name,
  email,
  password,
  phone_no,
  address,
  city,
  board_id,
  geyser_name,
  dashboards,
  compName
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: types.USER_LOADING
    })
    const config = {
      headers: {
        "Content-type": "Application/json"
      }
    }
    const body = JSON.stringify({
      name,
      email,
      password,
      phone_no,
      city,
      address,
      board_id,
      geyser_name,
      dashboards,
      compName
    })
    console.log("Action REGISTER body", body)

    try {
      const res = await axios.post(`${url}/user/register`, body, config)
      console.log("Register Api Response ", res)

      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data
      })


      return res
    } catch (error) {
      console.log("Register ACTION Catch", error.response)

      dispatch({
        type: types.REGISTER_FAIL
      })
    }




  }
}
export const login = (email, password, ip) => async (dispatch, getState) => {
  console.log("Login Action Hit", email, password, ip)
  dispatch({
    type: types.USER_LOADING
  })
  const config = {
    headers: {
      "Content-type": "Application/json"
    }
  }
  const body = JSON.stringify({
    email,
    password,
    ip
  })
  console.log("Check Action body", body)
  // const url = "https://rtl.in.ngrok.io"
  // const url = "https://hybrid.testserver.rubitronlabs.org"
  try {
    const res = await axios.post(
      `${url}/user/login`,
      body,
      config
    )
    console.log("api response login  Action", res.data)
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data
    })
    return res
  } catch (err) {

    const errorMessage = err.response
    dispatch({
      type: types.LOGIN_FAIL,
      payload: errorMessage

    })
    return errorMessage.data
  }
}


//get user All data
export const loadUser = token => {
  console.log("load user action hit")
  return (dispatch, getState) => {
    dispatch({
      type: types.USER_LOADING
    })
    const config = {
      headers: {
        "content-type": "Application/json",
        auth: token
      }
    }

    axios
      .get(`${url}/user/auth`, config)
      .then(res => {
        dispatch({
          type: types.USER_LOADED,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
          type: types.AUTH_ERROR
        })
      })
  }
}



export const logout = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}


export const lastLogin = (id) =>async (dispatch)=>{
  console.log("last login Action hit*******",id)
  const config =await makeConfig('application/json');
  const body ={
    id,
  };
  console.log('ACTION', body)
  try{
    const res = await axios.post(`${url}/user/last_Login`,body,config);
    console.log('USERrRrRRRRR',res.data.user)
    dispatch({
      type : types.LAST_LOGIN,
      payload:res.data.user
    
    })
    return{
    ...res
    
  }
}
catch(err){
  console.log(err);
}
};


export const forget_Password = email => async dispatch => {
  const config = await makeConfig('application/json');
  const body = {
    email,
  };
  console.log('ACTION', body.email);
  try {
    const res = await axios.post(`${url}/user/forgotPass`, body, config);
    // alert(res.data.message)
    return res.data.message
  } 
  catch (err) {
    console.log(err);
  }
};

//   console.log("forgotAction***************", body)
//   try {
//     const res = await axios.post(`${url}/user/forgotPass`, body, config)
//     console.log("Forget Password Action >>>>>>>>>>>>>>>>>>>>>>", res)
//     return {
//       ...res,
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

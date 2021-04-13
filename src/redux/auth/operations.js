import axios from 'axios'
import actions from './actions'
console.dir(axios)

axios.defaults.baseURL = `https://lpj-tasker.herokuapp.com`

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

const register = (credentials) => async (dispatch) => {
  dispatch(actions.registerRequest())
  try {
    const response = await axios.post(`/users/signup`, credentials)
    dispatch(actions.registerSuccess(response.data))
    token.set(response.data.token)
  } catch (error) {
    dispatch(actions.registerError(error.message))
  }
}
const login = (credentials) => async (dispatch) => {
  dispatch(actions.loginRequest())
  try {
    const response = await axios.post(`/users/login`, credentials)
    dispatch(actions.loginSuccess(response.data))
    token.set(response.data.token)
  } catch (error) {
    dispatch(actions.loginError(error.message))
  }
}

const logout = () => async (dispatch) => {
  dispatch(actions.logoutRequest())
  try {
    const response = await axios.post(`/users/logout`)
    dispatch(actions.logoutSuccess())
    token.unset()
  } catch (error) {
    dispatch(actions.logoutError(error))
  }
}

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: storageToken },
  } = getState()
  // console.log(storageToken)
  if (!storageToken) return
  token.set(storageToken)

  dispatch(actions.getCurrentUserRequest())
  try {
    const response = await axios.get('users/current')
    console.log(response)
    dispatch(actions.getCurrentUserSuccess(response.data))
  } catch (error) {
    dispatch(actions.getCurrentUserError(error))
  }
}

export default { register, login, logout, getCurrentUser }

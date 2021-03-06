import { createAction } from '@reduxjs/toolkit'

const registerRequest = createAction('signup/REQUEST')
const registerSuccess = createAction('signup/SUCCESS')
const registerError = createAction('signup/ERROR')

const loginRequest = createAction('LOGIN_REQUEST')
const loginSuccess = createAction('LOGIN_SUCCESS')
const loginError = createAction('LOGIN_ERROR')

const logoutRequest = createAction('LOGOUT_REQUEST')
const logoutSuccess = createAction('LOGOUT_SUCCESS')
const logoutError = createAction('LOGOUT_ERROR')

const getCurrentUserRequest = createAction('GET_CURRENT_USER_REQUEST')
const getCurrentUserSuccess = createAction('GET_CURRENT_USER_SUCCESS')
const getCurrentUserError = createAction('GET_CURRENT_USER_ERROR')

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
}

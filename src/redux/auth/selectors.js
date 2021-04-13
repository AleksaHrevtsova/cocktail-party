import { createSelector } from '@reduxjs/toolkit'

const isAuthenticated = ({ auth }) => {
  return !!auth.token
}

const getUserName = ({ auth }) => {
  return auth.user.name
}

export default {
  isAuthenticated,
  getUserName,
}

import { createReducer } from '@reduxjs/toolkit'
import {
  getOrdersSuccess,
  addOrderSuccess,
  deleteOrderSuccess,
  filterAction,
  updateOrderSuccess,
} from './actions'

const orderReducer = createReducer([], {
  [getOrdersSuccess]: (_, { payload }) => payload,
  [addOrderSuccess]: (state, { payload }) => [...state, payload],
  [updateOrderSuccess]: (state, { payload }) => {
    console.log(payload)
    return state.map((order) => (order.id === payload.id ? payload : order))
  },
  [deleteOrderSuccess]: (state, { payload }) =>
    state.filter((order) => order.id !== payload),
})

const filterReducer = createReducer('', {
  [filterAction]: (_, { payload }) => payload,
})

export default { orderReducer, filterReducer }

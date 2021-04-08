import { createReducer } from '@reduxjs/toolkit'
import { getOrdersRequest, getOrdersSuccess, getOrdersError } from './actions'

const orderReducer = createReducer([{ a: 'aaaaa' }], {
  [getOrdersSuccess]: (_, action) => action.payload,
})

export default { orderReducer }

import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersError,
  addOrderRequest,
  addOrderSuccess,
  addOrderError,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderError,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderError,
} from './actions'

import axios from 'axios'
// axios.defaults.baseURL = `http://localhost:4040`

const getOrders = () => async (dispatch) => {
  // dispatch(getOrdersRequest())
  // try {
  //   const res = await fetch(`http://localhost:4040/orders`)
  //   const data = await res.json()
  //   console.log(data.data)
  //   dispatch(getOrdersSuccess(data.data))
  // } catch (err) {
  //   dispatch(getOrdersError(err))
  // }
  // axios
  //   .get('/orders')
  //   .then(({ data }) => {
  //     return dispatch(getOrdersSuccess(data))
  //   })
  //   .catch((error) => {
  //     return dispatch(getOrdersError(error))
  //   })
}

const addOrder = (order) => async (dispatch) => {
  // dispatch(addOrderRequest())
  // try {
  //   const res = await fetch(`http://localhost:4040/orders`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(order),
  //   })
  //   const data = await res.json()
  //   console.log(data.data)

  //   dispatch(addOrderSuccess(data.data))
  // } catch (err) {
  //   dispatch(addOrderError(err))
  // }
  // axios
  //   .post('/orders', order)
  //   .then(({ data }) => {
  //     return dispatch(addOrderSuccess(data))
  //   })
  //   .catch((error) => {
  //     return dispatch(addOrderError(error))
  //   })
}

const updateOrder = ({ id, status }) => async (dispatch) => {
  // const update = { status }
  // dispatch(updateOrderRequest())
  // try {
  //   const res = await fetch(`http://localhost:4040/orders/${id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(status),
  //   })
  //   const data = await res.json()
  //   console.log(data.data)
  //   dispatch(updateOrderSuccess(data.data))
  // } catch (err) {
  //   dispatch(updateOrderError(err))
  // }
  // axios
  //   .patch(`/orders/${id}`, update)
  //   .then(({ data }) => dispatch(updateOrderSuccess(data)))
  //   .catch((error) => dispatch(updateOrderError(error)))
}

const deleteOrder = (id) => async (dispatch) => {
  // dispatch(deleteOrderRequest())
  // try {
  //   const res = await fetch(`http://localhost:4040/orders/${id}`, {
  //     method: 'DELETE',
  //   })
  //   const data = await res.json()
  //   console.log(data.data)
  //   dispatch(deleteOrderSuccess(data.data))
  // } catch (err) {
  //   dispatch(deleteOrderError(err))
  // }

  // axios
  //   .delete(`/orders/${id}`)
  //   .then(({ data }) => {
  //     console.log('DELETE', data)
  //     return dispatch(deleteOrderSuccess(id))
  //   })
  //   .catch((error) => {
  //     return dispatch(deleteOrderError(error))
  //   })
}

export default { getOrders, addOrder, updateOrder, deleteOrder }

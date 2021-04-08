import { createSelector } from '@reduxjs/toolkit'

export const getOrders = (store) => store.orders
// export const filter = (store) => store.filter

// const filteredData = createSelector([getOrders, filter], (orders, filter) => {
//   orders.filter((order) => order.name === filter)
// })

##

npm i json-server
скрипт в package.json
"server": "json-server -w db.json -d 250 -p 4040"

файл db.json в корне проекта
{
"orders": [
{
"id": "id_1",
"name": "Margarita",
"count": "1"
},
{
"id": "id_2",
"name": "Tequila",
"count": "2"
},
]
}

##

/orders

### actions.js

import { createAction } from "@reduxjs/toolkit";
export const addOrderRequest = createAction("ADD_ORDER_REQUEST");
export const addOrdertSuccess = createAction("ADD_ORDER_SUCCESS");
export const addOrderError = createAction("ADD_ORDER_ERROR");

export const deleteOrdertRequest = createAction("DELETE_ORDER_REQUEST");
export const deleteOrderSuccess = createAction("DELETE_ORDER_SUCCESS");
export const deleteOrderError = createAction("DELETE_ORDER_ERROR");

export const getOrdersRequest = createAction("GET_ORDERS_REQUEST");
export const getOrdersSuccess = createAction("GET_ORDERS_SUCCESS");
export const getOrdersError = createAction("GET_ORDERS_ERROR");

### operations.js

import {addOrderRequest, ..., getOrdersError } from './actions.js'

import axios from "axios";
axios.defaults.baseURL = "http://localhost:4040/";

const addOrder = (order) => (dispatch) => {
dispatch(addOrderRequest());
axios
.post("orders", order)
.then((response) => response.data)
.then((data) => {
data = dispatch(addOrderSuccess(data));
return data;
})
.catch((error) => dispatch(addOrderError(error)));
};

const deleteOrder = (id) => (dispatch) => {
dispatch(deleteOrderRequest());
axios
.delete(`orders/${id}`)
.then((response) => response.data)
.then((data) => {
data = dispatch(deleteOrderSuccess(data));
return data;
})
.catch((error) => dispatch(deleteOrderError(error)));
};

const getContacts = () => (dispatch) => {
dispatch(getOrdersRequest());
axios
.get("orders")
.then((response) => response.data)
.then((data) => {
data = dispatch(getOrdersSuccess(data));
return data;
})
.catch((error) => dispatch(getOrdersError(error)));
};

export default { addOrder, deleteOrder, getContacts };

### reducers.js

import { createReducer } from "@reduxjs/toolkit";
import {addOrderRequest, ..., getOrdersError } from './actions.js'

const addOrder = (state, action) => [...state, action.payload]
const deleteOrder = (state, action) => state.filter((order) => order.id !== action.payload);

const orderReducer = createReducer([], {
[addOrderSuccess]: addOrder,
[deleteOrderSuccess]: deleteOrder,
[getOrdersSuccess]: (state, action) => action.payload,
});
export default orderReducer;

### store.js

import { configureStore } from "@reduxjs/toolkit";
import orders from "./orders/reducers";

const store = configureStore({
reducer: {
orders,
},
});

export default store;

### Home.js
import { connect } from "react-redux";
import contactAction from "../../redux/orders/contactsAction";


### 
import { createSelector } from 'reselect';
export const getOrders = state => state.orders;
export const getOrderId = state => state.order.id;

export const getOrdersByID = createSelector(
  [getOrders, getOrderId],
  (orders, id) =>
    orders.find(order => order.id === id),
);
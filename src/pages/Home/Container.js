import React, { Component } from 'react'
import operations from '../../redux/orders/operations'
import { connect } from 'react-redux'
import { getOrders, filteredOrders } from '../../redux/orders/selectors'
import Home from './Home'
import { filterAction } from '../../redux/orders/actions'
// console.log(filterAction)

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getMyOrders()
  }

  render() {
    // console.log(this.props.myOrders)
    const {
      myOrders,
      addMyOrder,
      getMyOrders,
      deleteMyOrder,
      getMyFilter,
    } = this.props
    return (
      <>
        <Home
          myOrders={myOrders}
          addMyOrder={addMyOrder}
          getMyOrders={getMyOrders}
          deleteMyOrder={deleteMyOrder}
          getMyFilter={getMyFilter}
        />
        {/*  */}
        {/*  */}
      </>
    )
  }
}
const mapStateToProps = (store) => {
  return {
    // myOrders: store.orders,
    // myOrders: getOrders(store),
    myOrders: filteredOrders(store),
  }
}
const mapDispatchToProps = {
  getMyOrders: operations.getOrders,
  addMyOrder: operations.addOrder,
  deleteMyOrder: operations.deleteOrder,

  getMyFilter: filterAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

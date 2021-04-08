import React, { Component } from 'react'
import s from './Home.module.css'
import { Table, Button } from 'react-bootstrap'
import operations from '../../redux/orders/operations'
import { connect } from 'react-redux'
import { getOrders } from '../../redux/orders/selectors'
console.log(getOrders)

console.log(operations)

class Home extends Component {
  state = { name: '', count: '', orders: [] }
  componentDidMount() {
    this.props.getMyOrders()
  }

  handleChange = () => {}
  handleSubmit = () => {}
  render() {
    const { handleChange, handleSubmit } = this
    console.log('myOrders', this.props.myOrders)
    return (
      <section className={s.home}>
        <form onSubmit={handleSubmit} className={s.form}>
          <label htmlFor="cocktail">Enter your order please</label>
          <input
            onChange={handleChange}
            id="cocktail"
            type="text"
            placeholder="Enter cocktail please"
            name="name"
          />
          <input
            onChange={handleChange}
            id="count"
            type="number"
            placeholder="Enter count of cocktails please"
            name="count"
          />
        </form>
        <div>
          <form className={s.form}>
            <label htmlFor="filter">Filter for your orders</label>
            <input id="filter" type="text" placeholder="search your order" />
          </form>
        </div>
        <Table striped bordered hover className={s.tableList}>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>order</th>
              <th>count</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.myOrders.map((order, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>@mdo</td>
                <td>{order.name}</td>
                <td>{order.count}</td>
                <td>
                  <input
                    type="checkbox"
                    name="done"
                    id="done"
                    checked={order.status}
                  />
                </td>
                <td>
                  <Button variant="light" className={s.editBtn}>
                    edit
                  </Button>
                  <Button variant="danger">delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    )
  }
}
const mapStateToProps = (store) => {
  return {
    // myOrders: store.orders,
    myOrders: getOrders(store),
  }
}
const mapDispatchToProps = {
  getMyOrders: operations.getOrders,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

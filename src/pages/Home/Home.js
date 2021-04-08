import React, { Component } from 'react'
import s from './Home.module.css'
import { Table, Button } from 'react-bootstrap'
// import operations from '../../redux/orders/operations'
// import { connect } from 'react-redux'
// import { getOrders } from '../../redux/orders/selectors'
// console.log(getOrders)
// console.log(operations)

class Home extends Component {
  state = { name: '', count: '', filter: '' }
  // componentDidMount() {
  //   this.props.getMyOrders()
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const order = {
      name: this.state.name,
      count: this.state.count,
      status: false,
    }
    this.props.addMyOrder(order)
    // this.props.getMyOrders()
  }
  handleDelete = (id) => {
    this.props.deleteMyOrder(id)
    // this.props.getMyOrders()
  }

  filterSubmit = (e) => {
    e.preventDefault()
    this.props.getMyFilter(this.state.filter)
  }

  render() {
    console.log(this.props.getMyFilter)
    const { handleChange, handleSubmit, handleDelete, filterSubmit } = this
    console.log('myOrders', this.props.myOrders)
    const { myOrders } = this.props

    return (
      <section className={s.home}>
        <form className={s.form} onSubmit={handleSubmit}>
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
          <button type="submit" onClick={this.handleSubmit}>
            add
          </button>
        </form>
        <div>
          <form className={s.form} onSubmit={filterSubmit}>
            <label htmlFor="filter">Filter for your orders</label>
            <input
              id="filter"
              type="text"
              placeholder="search your order"
              onChange={(e) => {this.setState({ filter: e.target.value })
              this.props.getMyFilter(e.target.value)
            }}
            />
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
            {myOrders.map((order, idx) => (
              <tr key={order.id}>
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
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(order.id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    )
  }
}
// const mapStateToProps = (store) => {
//   return {
//     // myOrders: store.orders,
//     myOrders: getOrders(store),
//   }
// }
// const mapDispatchToProps = {
//   getMyOrders: operations.getOrders,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home

import React, { Component } from 'react'
import { getCocktail } from '../../services/cocktailsApi'
import { connect } from 'react-redux'
import actions from '../../redux/coctails/actions'

class Cocktails extends Component {
  state = {
    queryValue: 'margarita',
    drinks: [],
  }
  componentDidMount() {
    this.getData()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.myQuery !== this.props.myQuery) {
      this.getData()
    }
  }
  getData = () => {
    const { myQuery } = this.props
    return getCocktail(myQuery).then((drinks) => {
      if (drinks !== null) {
        this.props.getMyCocktails(drinks)
      }
    })
  }
  validateInput = (value) => {
    if (value.trim() !== '') {
      this.props.getMyQuery(value)
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    const { queryValue } = e.target
    this.validateInput(queryValue.value)
    queryValue.value = ''
  }
  toggleModal = () => {
    const { myModal, myChangeModal } = this.props
    return myChangeModal(!myModal)
  }
  render() {
    const { toggleModal } = this
    const { myModal, myCocktails } = this.props
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="queryValue" placeholder="your drink" />
        </form>
        <button onClick={toggleModal}>{`click ${myModal}`}</button>
        <h1>Coctails Page</h1>
        <ul>
          {myCocktails.map((drink) => {
            return <li key={drink.idDrink}>{drink.strDrink}</li>
          })}
        </ul>
      </>
    )
  }
}
const mapStateToProps = (store) => {
  return {
    myQuery: store.query,
    myCocktails: store.cocktailsData,
    myModal: store.showModal,
  }
}
const mapDispatchToProps = {
  getMyQuery: actions.getQueryVAlue,
  getMyCocktails: actions.getFetchCocktails,
  myChangeModal: actions.changeShowModal,
}
export default connect(mapStateToProps, mapDispatchToProps)(Cocktails)

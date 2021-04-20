import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { getCocktail } from '../../services/cocktailsApi'
import { connect } from 'react-redux'
import actions from '../../redux/coctails/actions'

const Cocktails = ({
  myQuery,
  getMyCocktails,
  getMyQuery,
  myCocktails = [],
  myModal,
  myChangeModal,
}) => {
  // тут был state
  const [queryValue, setQueryValue] = useState('tequila')
  const [drinks, setDrinks] = useState([])
  // setQueryValue('tequila') => this.setState({queryValue: 'tequila'})
  // setDrinks((prev) => [...prev, { name: 'coca-cola' }]) => this.setState(prev => ({...prev, {}}))

  const intID = useRef(0)
  // тут были методы жизненых циклов cdm, cdu, cwu
  // useEffect(() => {
  //   // effect
  //   // intID = setInterval(()=>{}, 500)
  //   return () => {
  //     //  clearInterval(id)
  //   }
  // }, [queryValue])
  // // useEffect || cdm для первичного запроса
  // useEffect(() => {
  //   getData()
  // }, [])
  // setQueryValue('tequila')
  useEffect(() => {
    console.log(queryValue)
    // getCocktail(queryValue).then((drinks) => {
    //   if (drinks !== null) {
    //     setDrinks(drinks)
    //   }
    // })
    getData()
  }, [queryValue])

  const getData = () => {
    getCocktail(queryValue).then((drinks) => {
      if (drinks !== null) {
        setDrinks(drinks)
      }
    })
  }
  // const getData = useCallback(() => {
  //   getCocktail(queryValue).then(
  //     (drinks) => {
  //       if (drinks !== null) {
  //         setDrinks(drinks)
  //       }
  //     },
  //     [queryValue, drinks],
  //   )
  // })
  // const getData = useMemo(() => {
  //   getCocktail(queryValue).then(
  //     (drinks) => {
  //       if (drinks !== null) {
  //         setDrinks(drinks)
  //       }
  //     },
  //     [queryValue, drinks],
  //   )
  // })
  const validateInput = (value) => {
    if (value.trim() !== '') {
      getMyQuery(value)
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { queryValue } = e.target
    // validateInput(queryValue)
    setQueryValue(queryValue.value)
    // setQueryValue('')
  }
  const toggleModal = () => myChangeModal(!myModal)

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="queryValue" placeholder="your drink" />
      </form>
      <button onClick={toggleModal}>{`click ${myModal}`}</button>
      <h1>Coctails Page</h1>
      <ul>
        {drinks.map((drink) => {
          return <li key={drink.idDrink}>{drink.strDrink}</li>
        })}
      </ul>
    </>
  )
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

// class Cocktails extends Component {
//   state = {
//     queryValue: 'margarita',
//     drinks: [],
//   }
// const intID;
//   componentDidMount() {
//     this.getData()
// intID = setInterval()
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.myQuery !== this.props.myQuery) {
//       this.getData()
//     }
//   }
// componentWillUnmount (){
//  clearInterval(intID)
// }
//   getData = () => {
//     const { myQuery } = this.props
//     return getCocktail(myQuery).then((drinks) => {
//       if (drinks !== null) {
//         this.props.getMyCocktails(drinks)
//       }
//     })
//   }
//   validateInput = (value) => {
//     if (value.trim() !== '') {
//       this.props.getMyQuery(value)
//     }
//   }
//   onSubmit = (e) => {
//     e.preventDefault()
//     const { queryValue } = e.target
//     this.validateInput(queryValue.value)
//     queryValue.value = ''
//   }
//   toggleModal = () => {
//     const { myModal, myChangeModal } = this.props
//     return myChangeModal(!myModal)
//   }
//   render() {
//     const { toggleModal } = this
//     const { myModal, myCocktails } = this.props
//     return (
//       <>
//         <form onSubmit={this.onSubmit}>
//           <input type="text" name="queryValue" placeholder="your drink" />
//         </form>
//         <button onClick={toggleModal}>{`click ${myModal}`}</button>
//         <h1>Coctails Page</h1>
//         <ul>
//           {myCocktails.map((drink) => {
//             return <li key={drink.idDrink}>{drink.strDrink}</li>
//           })}
//         </ul>
//       </>
//     )
//   }
// }
// const mapStateToProps = (store) => {
//   return {
//     myQuery: store.query,
//     myCocktails: store.cocktailsData,
//     myModal: store.showModal,
//   }
// }
// const mapDispatchToProps = {
//   getMyQuery: actions.getQueryVAlue,
//   getMyCocktails: actions.getFetchCocktails,
//   myChangeModal: actions.changeShowModal,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Cocktails)

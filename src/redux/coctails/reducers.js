import { createReducer } from '@reduxjs/toolkit'
import actions from './actions'

const cocktailReducer = createReducer('margarita', {
  [actions.getQueryVAlue]: (_, { payload }) => payload,
})

const allCocktailsReducer = createReducer([], {
  [actions.getFetchCocktails]: (_, { payload }) => payload,
})

const modalReducer = createReducer(false, {
    [actions.changeShowModal]: (_, { payload }) => payload,
  })
export default { cocktailReducer, allCocktailsReducer, modalReducer }

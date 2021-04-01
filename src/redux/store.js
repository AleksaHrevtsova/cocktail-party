// импортируем функцию создания стора
import { configureStore } from '@reduxjs/toolkit'
// экспортируем стор
import reducers from './coctails/reducers'

const store = configureStore({
  reducer: {
    query: reducers.cocktailReducer,
    cocktailsData: reducers.allCocktailsReducer,
    showModal: reducers.modalReducer,
  },
})

export default store

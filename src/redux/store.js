// импортируем функцию создания стора
import { configureStore } from '@reduxjs/toolkit'
// экспортируем стор
import reducers from './coctails/reducers'
import orderReducer from './orders/reducers'

const store = configureStore({
  reducer: {
    query: reducers.cocktailReducer,
    cocktailsData: reducers.allCocktailsReducer,
    showModal: reducers.modalReducer,
    
    orders: orderReducer.orderReducer,
    filterOrder: orderReducer.filterReducer,
  },
})

export default store

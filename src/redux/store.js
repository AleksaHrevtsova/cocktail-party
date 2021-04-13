// импортируем функцию создания стора
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// экспортируем стор
import reducers from './coctails/reducers'
import orderReducer from './orders/reducers'
import authReducer from './auth/reducers'

const config = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    query: reducers.cocktailReducer,
    cocktailsData: reducers.allCocktailsReducer,
    showModal: reducers.modalReducer,

    orders: orderReducer.orderReducer,
    filterOrder: orderReducer.filterReducer,

    auth: persistReducer(config, authReducer),
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
})
const persiststore = persistStore(store)
export { store, persiststore }

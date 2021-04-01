## structure
/src/components
/src/pages
/src/services
/src/redux

## netlify.toml
[build]
publish = "build"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200

## npm i @reduxjs/toolkit react-router-dom bootstrap react-bootstrap axios prop-types uuid
axios - либа запросов
uuid - генерация айдишников
prop-types - проверка пропов на типы данных
bootstrap react-bootstrap - стили и стилизованые компоненты для реакта
react-router-dom - компоненты для роутинга
@reduxjs/toolkit - библиотека управления состоянием

## npm i redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}


## store.js
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
reducer: {},
devTools: process.env.NODE_ENV = 'development',
})
## createAction

import { createAction } from '@reduxjs/toolkit';

## BEFORE ===================================================================================
первая отрисовка по начальному значению из локального стейта
cdm(getData) - с начальным значением из стейта 'margarita'

мы вводили в инпут значение, валидировали его и если Ок, то записывали в локальный стейт
onSubmit(inputValue)=>this.state.queryValue
cdu(getData) - измененным значением по сравнению с предыдущим состоянием локального стейта, получали ответ и записывали его в локальный стейт

## REDUX ===================================================================================
первая отрисовка по начальному значению из редюсера cocktailReducer
cdm(getData) - с начальным значением из глобального стора, где ответственный редюсер cocktailReducer, но для запроса нам надо получить это значение через mapStateToProps 
из store.query

мы вводили в инпут значение, валидировали его и если Ок, то теперь записываем его в глобальный стор в onSubmit, путем вызова экшена, но уже под нашим именем getMyQuery, который ссылается на  actions.getQueryVAlue

cdu(getData) -  измененным значением по сравнению с предыдущим состоянием пропов, а не стейта,
получали ответ и записываем его в глобальный стор через наш новый метод getMyCocktails, который 
ссылается на экшен actions.getFetchCocktails
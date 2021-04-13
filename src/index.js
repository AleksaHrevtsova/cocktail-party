import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import App from './AppContainer'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persiststore } from './redux/store'
// const { store, persiststore } = store
// console.log(store)
// импорты
// браузерройтер роутер для роутинга
// провайдер для стора
// стор

// import { PersistGate } from 'redux-persist/integration/react'
// персистстор
{
  /* <PersistGate loading={null} persistor={persistor}></PersistGate> */
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persiststore} loading={null}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
console.log(store)
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
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

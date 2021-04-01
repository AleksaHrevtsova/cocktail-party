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
axios 
uuid
prop-types
bootstrap react-bootstrap
react-router-dom
@reduxjs/toolkit - библиотека управления состоянием
## store.js
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
reducer: {},
devTools: process.env.NODE_ENV = 'development',
})
## createAction

import { createAction } from '@reduxjs/toolkit';
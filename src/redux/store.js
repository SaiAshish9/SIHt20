import {createStore,applyMiddleware,compose} from 'redux'

import logger from 'redux-logger'

import thunk from 'redux-thunk'

import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

const middlewares=[thunk]

if(process.env.NODE_ENV==='development'){
  middlewares.push(logger)
}

export const store= createStore(rootReducer,applyMiddleware(...middlewares))

export const persistor =persistStore(store)


export function configureStore(){
  const store=createStore(rootReducer,compose(applyMiddleware(thunk),
window.devToolsExtension?window.devToolsExtension():f=>f
)
)

return store;
}

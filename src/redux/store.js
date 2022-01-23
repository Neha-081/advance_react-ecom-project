import {createStore,applyMiddleware} from  'redux';
//what this does is it allows our browser to actually cache our store now depending on certain configuration options
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionStart } from './shop/shop.sagas';

const sagaMiddleware=createSagaMiddleware();
const middlewares=[sagaMiddleware]

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

export const store=createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionStart)

//create our new provider that's wrapping our application
export const persistor=persistStore(store)   //creating this new persisted version of our store.Right, using this persistent object.


export default { store, persistStore };





import {createStore,applyMiddleware} from  'redux';
//what this does is it allows our browser to actually cache our store now depending on certain configuration options
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//id redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an object, the middleware will call that function with dispatch method itself as the first arguement
import thunk from 'redux-thunk';   //not an object but a function

const middlewares=[thunk]

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

export const store=createStore(rootReducer,applyMiddleware(...middlewares));
//create our new provider that's wrapping our application
export const persistor=persistStore(store)   //creating this new persisted version of our store.Right, using this persistent object.


export default { store, persistStore };





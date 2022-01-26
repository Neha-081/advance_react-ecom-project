import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import {persistReducer} from 'redux-persist'
//actual  localstorage object on window browser -
import storage from 'redux-persist/lib/storage'
import directoryReducer from "./directory/directory.reducer";
import shopReducer from './shop/shop.reducer'

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']            //array containing the string names of any of the reducer that we want to store.
//the only reducer that we actually want to persist is the cart.
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer

})

export default persistReducer(persistConfig,rootReducer)
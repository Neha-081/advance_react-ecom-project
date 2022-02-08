import React,{useEffect} from 'react';
import {  Switch, Route,Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {selectCurrentUser} from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions';
import { useSelector,useDispatch } from 'react-redux';        //replace higher order component-connect nd replace mapstatetoprops,mapdispatchtoprops
import { GlobalStyle } from './global.styles';
//useDispatch or dispatch-take the action object that we want to dispatch or redux store.And it just dispatches it programmatically.

const App=()=> {

const currentUser=useSelector(selectCurrentUser);
const dispatch=useDispatch()

  useEffect(()=>{
 dispatch( checkUserSession())
},[dispatch])



    return (
      <div>
        <GlobalStyle/>
    {/* header will be always present and rendered */}
        <Header  />  
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact
           path='/signin'
            render={()=>
            currentUser? (
            <Redirect to='/'/>
            ):(
            <SignInAndSignUp/>)}
             />
        </Switch>
      </div>
    );
  }
  





export default App;



import React from 'react';
import {  Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {auth,createUserProfile} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component {
unsubscribeFromAuth=null;

  componentDidMount(){
const {setCurrentUser}=this.props

  //   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
  //  if(userAuth){
  //   const userRef=await createUserProfile(userAuth)  //check if our database has updated at that reference with any new data.
    

  //   userRef.onSnapshot(snapShot=>{   //set user to currentUser
  // setCurrentUser({
  //      id:snapShot.id,
  //      ...snapShot.data()
  //    })
  //  })
  // }
  //   setCurrentUser(userAuth);   //currentuser to null
  // })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }




  render(){
    return (
      <div>
    {/* header will be always present and rendered */}
        <Header  />  
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact
           path='/signin'
            render={()=>
            this.props.currentUser? (
            <Redirect to='/'/>
            ):(
            <SignInAndSignUp/>)}
             />
        </Switch>
      </div>
    );
  }
  
}


const mapStateToProps=createStructuredSelector({     //redirect to homepage after signin
  currentUser:selectCurrentUser,
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
}

)

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);



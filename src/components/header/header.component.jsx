import CartIcon from '../cart-icon/cart-icon.component';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer,LogoConatiner,OptionContainer,OptionLink } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';


const Header=({currentUser,hidden,signOutStart})=>(
    <HeaderContainer>
  <LogoConatiner to='/' >
  <Logo className='logo'/>
  </LogoConatiner>
  <OptionContainer>
      <OptionLink  to='/shop'>
          SHOP
           </OptionLink>
           <OptionLink  to='/shop'>
          CONTACT
           </OptionLink>
           {
             currentUser?
             <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
             :
             <OptionLink  to='/signin'>SIGN IN</OptionLink>

           }
           <CartIcon/>
  </OptionContainer>
  {
    hidden?null:
   <CartDropdown/>
   }
   </HeaderContainer>
)

//create structure selector will automatically pass our top level state that we get
// as our map state to props into each subsequent selector.
const mapStateToProps=createStructuredSelector({            
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

const mapDispatchToProps=dispatch=>({
  signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
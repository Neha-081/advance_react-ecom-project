import CartIcon from '../cart-icon/cart-icon.component';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer,LogoConatiner,OptionContainer,OptionLink } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';
import { useSelector,useDispatch } from 'react-redux';


const Header=()=>{
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const signOutUser =()=> dispatch(signOutStart());

  return(
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
             <OptionLink as='div' onClick={signOutUser}>SIGN OUT</OptionLink>
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
)}

//create structure selector will automatically pass our top level state that we get
// as our map state to props into each subsequent selector.




export default Header;
import './header.styles.scss';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header=({currentUser,hidden})=>(
    <div className='header'>
  <Link to='/' className='logo-container'>
  <Logo className='logo'/>
  </Link>
  <div className='options'>
      <Link className='option' to='/shop'>
          SHOP
           </Link>
           <Link className='option' to='/shop'>
          CONTACT
           </Link>
           {
             currentUser?
             <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
             :
             <Link className='option' to='/signin'>SIGN IN</Link>

           }
           <CartIcon/>
  </div>
  {
    hidden?null:
   <CartDropdown/>
   }
    </div>
)

//create structure selector will automatically pass our top level state that we get
// as our map state to props into each subsequent selector.
const mapStateToProps=createStructuredSelector({            
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);
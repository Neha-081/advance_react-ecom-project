
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
  } from './checkout.styles';
import { useSelector } from 'react-redux';

const CheckoutPage=()=>{
const cartItems=useSelector(selectCartItems)
const total=useSelector(selectCartTotal)

  return(
    <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
      {
          cartItems.map(cartItem=>
            <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
            )
      }

      <TotalContainer >
          TOTAL: ${total}
      </TotalContainer>

      <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
)};




export default CheckoutPage;

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeChcekoutButton from '../../components/stripe-button/stripe-button.component';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
  } from './checkout.styles';

const CheckoutPage=({cartItems,total})=>(
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

      <StripeChcekoutButton price={total}/>
    </CheckoutPageContainer>
);


const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
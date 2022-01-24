
import { addItems } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';


const CollectionItem=({item})=>{
    const {name,price,imageUrl}=item

    const dispatch=useDispatch()
   const addItemClickHandler=(item)=>dispatch(addItems(item))

    return(
        <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItemClickHandler(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
)};



export default CollectionItem;

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles';

const CollectionPage=()=>{
  const {collectionId}=useParams()   //replacable of ownProps.match.params.collectionId in mapstatetoprops
  const collection=useSelector(selectCollection(collectionId))


const {title,items}=collection
return(
    <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  </CollectionPageContainer>
)}


export default CollectionPage;
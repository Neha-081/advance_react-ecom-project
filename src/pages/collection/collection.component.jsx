import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component'
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage=({collection})=>{
// console.log(collection);
const {title,items}=collection
return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
        {
            items.map(item=><CollectionItem key={item.id} item={item}/>)
        }
        </div>
        
    </div>
)}

const mapStateToProps=(state,ownProps)=>({      //ownProps- gives all the props that are getting on collectionPage component including our match object which get from Route component that is passing our collection on shop page
   collection:selectCollection(ownProps.match.params.collectionId)(state)    //this is necessary because unlike other selectors,this selector needs a part of the state depending on the URL parameter 
})

export default connect(mapStateToProps)(CollectionPage);
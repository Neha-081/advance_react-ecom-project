import React,{useEffect} from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionPageContainer from '../collection/collection.conatiner';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewConatiner from '../../components/collections-overview/collections-overview.conatiner';
import { useDispatch } from 'react-redux';




const ShopPage=({match})=>{
    const dispatch=useDispatch()
    const fetchCollectionsStartHandler=()=>dispatch(fetchCollectionsStart())

    useEffect(()=>{
        fetchCollectionsStartHandler()
    },[fetchCollectionsStartHandler])




        return (
            <div className='shop-page'>
{/* render is a method that takes a function where the parameters and the function are pretty much just the parameters that the component will receive, which in our case are going to be the match location */}
<Route exact path={`${match.path}`} 
component={CollectionsOverviewConatiner}
/>       
{/* it actually allows us to access this category ID as a parameter on the match object when we're inside of our category page. */}
<Route path={`${match.path}/:collectionId`}
 component={CollectionPageContainer}
 />        
</div>
        )
   
    }



export default ShopPage;
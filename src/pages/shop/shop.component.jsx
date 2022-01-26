import React,{useEffect} from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionPageContainer from '../collection/collection.conatiner';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewConatiner from '../../components/collections-overview/collections-overview.conatiner';
import { connect } from 'react-redux';




const ShopPage=({fetchCollectionsStart,match})=>{
    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])




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

    const mapDispatchToProps = dispatch => ({
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
      });

export default connect(null,mapDispatchToProps)(ShopPage);
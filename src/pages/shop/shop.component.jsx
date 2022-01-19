import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';

const ShopPage=({match})=>(
<div className='shop-page'>
<Route exact path={`${match.path}`} component={CollectionOverview}/>
{/* it actually allows us to access this category ID as a parameter on the match object when we're inside of our category page. */}
<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>        
</div>
    )




export default ShopPage;
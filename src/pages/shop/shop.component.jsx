import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching,selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner=WithSpinner(CollectionOverview)
const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class ShopPage extends React.Component{
componentDidMount(){
    const {fetchCollectionsStartAsync}=this.props
    fetchCollectionsStartAsync()


}

    render(){
        const {match,isCollectionFetching,IsCollectionLoaded}=this.props
        return (
            <div className='shop-page'>
{/* render is a method that takes a function where the parameters and the function are pretty much just the parameters that the component will receive, which in our case are going to be the match location */}
<Route exact path={`${match.path}`} render={(props=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>)}/>       
{/* it actually allows us to access this category ID as a parameter on the match object when we're inside of our category page. */}
<Route path={`${match.path}/:collectionId`} render={(props=><CollectionPageWithSpinner isLoading={!IsCollectionLoaded} {...props}/>)}/>        
</div>
        )
   
    }
}

const mapStateToProps=createStructuredSelector({
    isCollectionFetching:selectIsCollectionsFetching,
    IsCollectionLoaded:selectIsCollectionLoaded
})
    
const mapDispatchToProps=dispatch=>({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})




export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
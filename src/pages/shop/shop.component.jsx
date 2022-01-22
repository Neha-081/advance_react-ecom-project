import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner=WithSpinner(CollectionOverview)
const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class ShopPage extends React.Component{
state={
    loading:true
}
unsubscribeFromSnapshot=null;       //collections array from firestore

componentDidMount(){
    const {updateCollections}=this.props;
const collectionRef=firestore.collection('collections');
 

//whenever the collection ref updates or whenever this code gets run for the first time, 
// this collection ref will send us the snapshot representing the code of our collections
// objects array at the time when this code renders


collectionRef.get().then(snapshot=>{
    const collectionsMap= convertCollectionsSnapshotToMap(snapshot)
    updateCollections(collectionsMap)
    this.setState({loading:false})
   })
}

    render(){
        const {match}=this.props
        const {loading}=this.state
        return (
            <div className='shop-page'>
{/* render is a method that takes a function where the parameters and the function are pretty much just the parameters that the component will receive, which in our case are going to be the match location */}
<Route exact path={`${match.path}`} render={(props=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)}/>       
{/* it actually allows us to access this category ID as a parameter on the match object when we're inside of our category page. */}
<Route path={`${match.path}/:collectionId`} render={(props=><CollectionPageWithSpinner isLoading={loading} {...props}/>)}/>        
</div>
        )
   
    }
}

    
const mapDispatchToProps=dispatch=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})




export default connect(null,mapDispatchToProps)(ShopPage);
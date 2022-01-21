import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

console.log('neha');

class ShopPage extends React.Component{
    unsubscribeFromSnapshot=null;       //collections array from firestore

componentDidMount(){
 
    const collectionRef=firestore.collection('collections')

//whenever the collection ref updates or whenever this code gets run for the first time, 
// this collection ref will send us the snapshot representing the code of our collections
// objects array at the time when this code renders
collectionRef.onSnapshot(async snapshot=>{
    convertCollectionsSnapshotToMap(snapshot)
})
}

  render(){
      const {match}=this.props
      return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      {/* it actually allows us to access this category ID as a parameter on the match object when we're inside of our category page. */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>        
      </div>
          )
  }
}





export default ShopPage;
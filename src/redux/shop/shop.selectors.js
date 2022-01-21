import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop=state=>state.shop

export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)


//we want to get all the keys and the map over that array of keys so we get the value of
// our collections object at that key the keys and the map over that array of keys so we
// get the value of our collections object at that key,which will give us an array of our items
export const selectCollectionsForPreview=createSelector(
    [selectCollections],
    (collections)=>
    collections ? Object.keys(collections).map((key)=>collections[key]) : []  //converting object of shop data into array to map in collection overview
)

 

export const selectCollection=memoize((collectionUrlParam)=>       //collectionUrlParam - string parameter value for each id from shop data
createSelector(
    [selectCollections],
    collections=>collections ? collections[collectionUrlParam] : null  // converted shop data from array to object i.e-data normalization to find individual elements

)
)




//By wrapping this function is memoize, we're saying that whenever this function gets
//  called and receives collectionUrlParam, I want to memoize the return of this function
//   (in this case we return a selector). If this function gets called again with the same
//    collectionUrlParam, don't rerun this function because we'll return the same value as
//     last time, which we've memoized so just return the selector that's been stored.
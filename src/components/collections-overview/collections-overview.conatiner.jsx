import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from './collections-overview.component'
import { compose } from "redux";

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionsFetching
});

const CollectionsOverviewConatiner=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)
//evaluate with Spiner first by passing in the collections overview to that 

export default CollectionsOverviewConatiner;
//Higher Order Component

import React from "react";
import { SpinnerOverlay,SpinnerContainer } from "./with-spinner.styles";

const WithSpinner=wrappedComponent=>{
    const Spinner=({isLoading,...otherProps})=>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <wrappedComponent {...otherProps}/>
    )
}
return Spinner;
}

export default WithSpinner;
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Alert = (props) => {
    return(
        <div className="alert alert-danger" role="alert">
            {props.text}
        </div>
    )
}

Alert.PropTypes = {
    text: PropTypes.string
}

ReactDOM.render(<Alert text="OMG! Something really bad has happened!"/>, document.querySelector("#myDiv"));
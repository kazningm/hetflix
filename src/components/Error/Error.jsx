import React from "react";
import popcorn from "./../../popcorn.png";
import style from "./Error.module.css";

const Error = () => {
    return (
        <div className={ style.errorDiv }>
            <img src={ popcorn } alt="" className={ style.popcornImg } />
            <div className={ style.errorMessage } >
                SOMETHING WENT WRONG...
            </div>
        </div>
    )
}

export default Error;
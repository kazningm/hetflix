import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { hideErrorAction } from "./../../../reducers/forms_reducer";
import style from "./ErrorAction.module.css";

const ErrorAction = (props) => {
    let hideErrorAction = props.hideErrorAction;

    return props.isErrorActionShow && (
        <div className={ style.root }>
            <div className={ style.formWrapper }>
                <div className={ style.close } onClick={ hideErrorAction }>&#10006;</div>
                <div className={ style.icon }>&#10006;</div>
                <div className={ style.congrat }>ERROR</div>
                <div> { props.error_message } </div>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => ({
    isErrorActionShow: state.forms.isErrorActionShow,
    error_message: state.forms.error_message
})

const ErrorActionContainer = compose(
    connect(mapStateToProps, { hideErrorAction })
)(ErrorAction)

export default ErrorActionContainer;
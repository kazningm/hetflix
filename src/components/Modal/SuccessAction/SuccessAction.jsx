import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { hideSuccessAction } from "./../../../reducers/forms_reducer";
import style from "./SuccessAction.module.css";

const SuccessAction = (props) => {

    let hideSuccessAction = props.hideSuccessAction;

    return props.isSuccessActionShow && (
        <div className={ style.root }>
            <div className={ style.formWrapper }>
                <div className={ style.close } onClick={ hideSuccessAction }>&#10006;</div>
                <div className={ style.icon }>&#10004;</div>
                <div className={ style.congrat }>CONGRATULTAION</div>
                <div>The action has done successful</div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isSuccessActionShow: state.forms.isSuccessActionShow
})

const SuccessActionContainer = compose(
    connect(mapStateToProps, { hideSuccessAction })
)(SuccessAction)

export default SuccessActionContainer;
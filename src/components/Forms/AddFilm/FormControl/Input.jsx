import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import style from "./FormControl.module.css";

const Input = (props) => {

    let label = props.label;
    let id = props.id;
    let type = props.type;
    let onChange = props.onChange;
    let onBlur = props.onBlur;
    let value = props.value;
    let error = props.error;
    let touched = props.touched;
    let disabled = props.disabled;
    let cls = props.class;

    return (
        <div className={ style.formControl }>
            <label htmlFor={ id }>{ label }</label>
            <input type={ type }
                id={ id }
                name={ id }
                onChange={ onChange }
                onBlur={ onBlur }
                value={ value }
                disabled={ disabled } 
                className={ clsx([cls, { [style.error]: error && touched }]) }/>
                { (error && touched) ? <div className={ style.errorText }>{ error }</div> : null }
        </div>
    )
}

export default Input;

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    cls: PropTypes.string
}

Input.defaultProps = {
    label: "???",
    disabled: false,
    error: ""
}
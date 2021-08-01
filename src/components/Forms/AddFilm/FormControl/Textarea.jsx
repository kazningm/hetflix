import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import style from "./FormControl.module.css";

const Textarea = (props) => {
    let label = props.label;
    let id = props.id;
    let type = props.type;
    let placeholder = props.placeholder;
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
            <textarea 
                rows="3"                
                type={ type }
                id={ id }
                name={ id }
                placeholder={ placeholder }
                onChange={ onChange }
                onBlur={ onBlur }
                value={ value }
                disabled={ disabled } 
                className={ clsx([cls, { [style.error]: error && touched }]) }>
            </textarea>
                { (error && touched) ? <div className={ style.errorText }>{ error }</div> : null }
        </div>
    )
}

export default Textarea;

Textarea.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    cls: PropTypes.string
}

Textarea.defaultProps = {
    label: "???",
    disabled: false,
    error: ""
}
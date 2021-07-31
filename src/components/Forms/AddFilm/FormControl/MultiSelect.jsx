import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import style from "./FormControl.module.css";

const MultiSelect = (props) => {

    let label = props.label;
    let id = props.id;
    let options = props.options;
    let onChange = props.onChange;
    let onBlur = props.onBlur;
    let value = props.value;
    let error = props.error;
    let touched = props.touched;
    let disabled = props.disabled;
    let cls = props.class;

    return (
        <div className={ style.formControl }>
            <label htmlFor={id}>{label}</label>
            <select 
                multiple
                name={id}
                id={id}
                onChange={onChange}
                onBlur={ onBlur }
                value={value}
                disabled={disabled} 
                className={ clsx([cls, { [style.error]: error && touched }]) } >
                {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
            { (error && touched) ? <div className={ style.errorText }>{ error }</div> : null }
        </div>
    )
}

export default MultiSelect;

MultiSelect.propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.array,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    cls: PropTypes.string
}

MultiSelect.defaultProps = {
    label: "???",
    disabled: false,
    error: ""
}
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { hideActionList } from "./../../../reducers/action_list_reducer";
import { openEditForm } from "./../../../reducers/forms_reducer";
import PropTypes from "prop-types";
import style from "./ActionListForFilmCard.module.css";

const ActionListForFilmCard = (props) => {
    let filmInfo = props.filmInfo;
    let top = props.top-10; // -10 чтобы курсор был внутри ActionListForFilmCard
    let left = props.left-10;
    let isActionListShow = props.isActionListShow;

    let hideActionList = props.hideActionList;

    let openEditForm = props.openEditForm;

    const actionList = React.createRef();

    useEffect(() => {
        if (actionList.current) {
            actionList.current.style.top = `${top}px`;
            actionList.current.style.left = `${left}px`; 
            actionList.current.style.display = "inline-flex"; 
        } 
    }, [top, left, isActionListShow, filmInfo]);

    return isActionListShow && (
        <ul ref={ actionList }  className={ style.actionList }  onMouseLeave={ hideActionList }>
            <li onClick={ hideActionList }>&#10006;</li>
            <li onClick={ openEditForm }>Edit</li>
            <li>Delete</li>
        </ul>
    )
}

let mapStateToProps = (state) => ({
    isActionListShow: state.action_list.isActionListShow,
    film_id: state.action_list.film_id,
    top: state.action_list.top,
    left: state.action_list.left,
    filmInfo: state.forms.filmInfo
})

let mapDispatchToProps = { 
    hideActionList, 
    openEditForm
}

let ActionListForFilmCardContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ActionListForFilmCard)

export default ActionListForFilmCardContainer;

ActionListForFilmCard.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    isActionListShow: PropTypes.bool,
    film_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hideActionList: PropTypes.func
}
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { hideActionList } from "./../../../reducers/action_list_reducer";
import { showEditForm, deleteFilm } from "./../../../reducers/forms_reducer";
import { setCountDeletedFilms } from "./../../../reducers/films_reducer";
import PropTypes from "prop-types";
import style from "./ActionListForFilmCard.module.css";

const ActionListForFilmCard = (props) => {
    let top = props.top - 10; // -10 чтобы курсор был внутри ActionListForFilmCard
    let left = props.left - 10;
    let isActionListShow = props.isActionListShow;

    let hideActionList = props.hideActionList;

    let openEditForm = (event) => {
        props.showEditForm();
    }

    let deleteFilm = () => {
        let answer = window.confirm("Are you sure you want to delete this film?");
        if (answer) {
            props.deleteFilm(props.film_id);
        }
    }

    const actionList = React.createRef();

    useEffect(() => {
        if (actionList.current) {
            actionList.current.style.top = `${top}px`;
            actionList.current.style.left = `${left}px`;
            actionList.current.style.display = "block";
        }
    }, [top, left, isActionListShow]);

    return isActionListShow && (
        <ul ref={actionList} className={style.actionList} onMouseLeave={ hideActionList }>
            <li onClick={ hideActionList }>&#10006;</li>
            <li onClick={ openEditForm }>Edit</li>
            <li onClick={ deleteFilm }>Delete</li>
        </ul>
    )
}

let mapStateToProps = (state) => ({
    isActionListShow: state.action_list.isActionListShow,
    film_id: state.action_list.film_id,
    top: state.action_list.top,
    left: state.action_list.left,
    filmInfoEdit: state.forms.filmInfoEdit
})

let mapDispatchToProps = {
    hideActionList,
    showEditForm,
    deleteFilm,
    setCountDeletedFilms
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
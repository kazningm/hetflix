import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { changeOffset } from "../../reducers/films_reducer";
import style from "./Paginator.module.css";

const useQuery = () => new URLSearchParams(window.location.search)

const Paginator = (props) => {
    let query = useQuery();

    let offset = props.offset;

    let toBegin = () => {
        props.changeOffset(1);
        query.set("offset", 1);
        window.history.pushState(null, null, "?" + query.toString());
    }

    let toLeft = () => {
        if (offset > 1) {
            props.changeOffset(offset-1);
            query.set("offset", offset-1);
            window.history.pushState(null, null, "?" + query.toString());
        }
    }

    let toRight = () => {
        props.changeOffset(offset+1);
        query.set("offset", offset+1);
        window.history.pushState(null, null, "?" + query.toString());
    }

    return (
        <div className={style.pagginateDiv}>
            <div className={style.begin} onClick={ toBegin }>&#171;</div>
            <div className={style.left} onClick={ toLeft }>&#8249;</div>
            <div>{ offset }</div>
            <div className={style.right} onClick={ toRight }>&#8250;</div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    offset: state.films.offset,
    genre: state.films.genre
})

const PaginatorContainer = compose(
    connect(mapStateToProps, { changeOffset })
)(Paginator)

export default PaginatorContainer;
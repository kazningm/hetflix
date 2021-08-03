import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { changeOffset } from "../../reducers/films_reducer";
import style from "./Paginator.module.css";

const useQuery = () => new URLSearchParams(window.location.search)

const Paginator = (props) => {

    // setting query param offset if user write it in address
    let query = useQuery();
    let offset_QP = Number(query.get("offset"));
    if (!offset_QP || offset_QP < 0) {
        offset_QP = 0;
        query.set("offset", 0);        
    } else if (offset_QP >= 0) {
        query.set("offset", offset_QP);
    } else {
        query.set("offset", props.offset);
    }
    window.history.pushState(null, null, "?" + query.toString());
    
    useEffect(() => {
        if (offset_QP) {
            props.changeOffset(offset_QP);
        }
    }, [offset_QP])

    let offset = props.offset;

    let toBegin = () => {
        props.changeOffset(0);
        query.set("offset", 0);
        window.history.pushState(null, null, "?" + query.toString());
    }

    let toLeft = () => {
        if (offset > 0) {
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

    return props.filmsList.length && (
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
    filmsList: state.films.filmsList
})

const PaginatorContainer = compose(
    connect(mapStateToProps, { changeOffset })
)(Paginator)

export default PaginatorContainer;
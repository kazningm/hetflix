import loader from "./../../loader.svg";
import style from "./Loader.module.css";
import { ReactSVG } from "react-svg";
import { connect } from "react-redux";

const Loader = (props) => {
    return (
        props.isLoaderShow ? <div className={ style.loader }> <ReactSVG src={ loader } /> </div> : null
    );
}

let mapStateToProps = (state) => ({
    isLoaderShow: state.films.isLoaderShow
})

const LoaderContainer = connect(mapStateToProps, null)(Loader)

export default LoaderContainer;
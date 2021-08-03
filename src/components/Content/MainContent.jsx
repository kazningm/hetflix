import PropTypes from "prop-types";
import { Route } from "react-router";
import FilmsGrid from "./FilmsGrid";
import style from "./MainContent.module.css";

const MainContent = () => {
    return (
        <main className={ style.root }>
            <FilmsGrid />
            {/* <Route path="/home/genre/:genre?" render={() => <FilmsGrid />} />
            <Route path="/search" render={() => <FilmsGrid />} /> */}
        </main>
    );
}

Route.propTypes = {
    path: PropTypes.string
}

Route.defaultProps = {
    path: "/home"
}

export default MainContent;
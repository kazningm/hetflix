import PropTypes from "prop-types";
import { Route } from "react-router";
import FilmsGrid from "./FilmsGrid";

const MainContent = () => {
    return (
        <main>
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
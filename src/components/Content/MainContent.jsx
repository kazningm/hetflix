import PropTypes from "prop-types";
import { Route } from "react-router";
import FilmsGrid from "./FilmsGrid";

const MainContent = () => {
    return (
        <main>
            <Route path="/all" render={ () => <FilmsGrid /> } />
            <Route path="/family" render={ () => <FilmsGrid /> } />
            <Route path="/action" render={ () => <FilmsGrid /> } />
            <Route path="/drama" render={ () => <FilmsGrid /> } />
            <Route path="/fantasy" render={ () => <FilmsGrid /> } />
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
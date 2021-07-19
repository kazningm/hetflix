import PropTypes from "prop-types";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import FilmsGrid from "./FilmsGrid";

const MainContent = () => {
    return (
        <main>
            <Redirect exact from="/" to="/all" />
            <Route path="/all" render={ () => <FilmsGrid /> } />
            <Route path="/family" render={ () => <FilmsGrid /> } />
            <Route path="/action" render={ () => <FilmsGrid /> } />
            <Route path="/drama" render={ () => <FilmsGrid /> } />
            <Route path="/crime" render={ () => <FilmsGrid /> } />
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
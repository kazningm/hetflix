import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";
import FilmsGrid from "./FilmsGrid";

// const A = React.lazy(() => import("./A"));

const MainContent = () => {
    return (
        <main>
            <Route path="/all" render={ () => <FilmsGrid /> } />
            <Route path="/documentary" render={ () => <FilmsGrid /> } />
            <Route path="/horror" render={ () => <FilmsGrid /> } />
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
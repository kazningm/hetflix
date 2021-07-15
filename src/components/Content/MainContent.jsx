import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";

// const A = React.lazy(() => import("./A"));

const MainContent = () => {
    return (
        <main>
            <Route path="/all" render={ () => {} } > ALL</Route>
            <Route path="/documentary" render={ () => {} }> DOCUMENTARY </Route>
            <Route path="/horror" render={ () => {} }> HORROR </Route>
            <Route path="/crime" render={ () => {} }> CRIME </Route>
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
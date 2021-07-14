import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router";

// const A = React.lazy(() => import("./A"));

const MainContent = () => {
    return (
        <main>
            <Route path="/home" render={ () => {} }>HOME</Route>
            <Route path="/serials" render={ () => {} }>SERIALS</Route>
            <Route path="/films" render={ () => {} }>FILMS</Route>
            <Route path="/new" render={ () => {} }>NEW AND POPULAR</Route>
            <Route path="/my-list" render={ () => {} }>MY LIST</Route>
            <Route path="/search" render={ () => {} }>SEARCH</Route>
            <Route path="/mode" render={ () => {} }>MODE</Route>
            <Route path="/login" render={ () => {} }>LOGIN</Route>
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
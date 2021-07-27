import "./App.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter, Route } from "react-router-dom";
// import { Suspense } from "react";
import MainContent from "./components/Content/MainContent";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import ActionListForFilmCard from "./components/Forms/ActionListForFilmCard/ActionListForFilmCard";
import Loader from "./components/Content/Loader";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/store";
import AddFilm from "./components/Forms/AddFilm/AddFilm";
import EditFilm from "./components/Forms/AddFilm/EditFilm";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <SearchBlock />
          <Nav />
          <Loader />
          <MainContent />
          <ActionListForFilmCard />
          <AddFilm />
          <EditFilm />
          {/* <Error /> */}
          {/* <footer>
            футер
          </footer> */}
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

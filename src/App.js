import "./App.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter } from "react-router-dom";
// import { Suspense } from "react";
import MainContent from "./components/Content/MainContent";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import ActionListForFilmCard from "./components/Forms/ActionListForFilmCard/ActionListForFilmCard";
import Loader from "./components/Content/Loader";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/store";
import AddFilm from "./components/Forms/AddFilm/AddFilm";

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

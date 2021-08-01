import "./App.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import MainContent from "./components/Content/MainContent";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import Loader from "./components/Content/Loader";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/store";
import ActionListForFilmCard from "./components/Forms/ActionListForFilmCard/ActionListForFilmCard";
import AddFilm from "./components/Forms/AddFilm/AddFilm";
import EditFilm from "./components/Forms/AddFilm/EditFilm";
import Footer from "./components/Footer/Footer";
import FilmInfo from "./components/FilmInfo/FilmInfo";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter> 
          {/* //////////////// MAIN BLOCK ///////////////*/}
          <SearchBlock />
          <Nav />
          <Route path="/genre/:genre"  render={() => <MainContent />} />
          {/* //////////////// FORMS ///////////////*/}
          <AddFilm />
          <EditFilm />
          <FilmInfo />

          {/* //////////////// OTHER ///////////////*/}
          <ActionListForFilmCard />
          <Loader />

          {/* <Nav />
          
          <MainContent />
          <ActionListForFilmCard />
          <AddFilm />
          <EditFilm />
          <SuccessAction />
          <ErrorAction /> */}
          {/* <Error /> */}
          {/* <footer>
            футер
          </footer> */}
          {/* //////////////// FOOTER ///////////////*/}
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

import "./App.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter } from "react-router-dom";
// import { Suspense } from "react";
import MainContent from "./components/Content/MainContent";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import Error from "./components/Error/Error";
import Loader from "./components/Content/Loader";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <SearchBlock />
          <Nav />
          <Loader />
          <MainContent />
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

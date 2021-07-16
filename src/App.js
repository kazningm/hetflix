import "./App.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter } from "react-router-dom";
// import { Suspense } from "react";
import MainContent from "./components/Content/MainContent";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import Error from "./components/Error/Error";
import FilmCard from "./components/FilmCard/FilmCard";

function App() {
  return (
    <>
    {/* <Suspense fallback={ <h1>waiting...</h1> }> */}
      <BrowserRouter>
        <SearchBlock />
        <Nav />
        <MainContent />
        <FilmCard />
        <Error />
        <footer>
          футер
        </footer>
      </BrowserRouter>
      {/* </Suspense> */}
    </>
  );
}

export default App;

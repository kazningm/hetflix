import "./App.css";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import MainContent from "./components/Content/MainContent";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import Loader from "./components/Content/Loader";
import { Provider } from "react-redux";
import React, { Suspense } from "react";
import store from "./store/store";
import ActionListForFilmCard from "./components/Forms/ActionListForFilmCard/ActionListForFilmCard";

const AddFilm = React.lazy(() => import("./components/Forms/AddFilm/AddFilm"));
const EditFilm = React.lazy(() => import("./components/Forms/AddFilm/EditFilm"));

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={ SearchBlock } exact/>
          <Route path="/genre/:genre?" component={ SearchBlock } exact/>
          <Route path="/search/:search?" component={ SearchBlock } />
          <Route path="/film/:film?" render={ () => <div>FilmInfo</div> } />

          <Route path="/" component={ Nav } exact/>
          <Route path="/genre/:genre?" component={ Nav } exact/>
          <Route path="/search/:search?" component={ Nav } />
          <Route path="/film/:film?" component={ Nav } />

          <Route path="/" component={ MainContent } exact/>
          <Route path="/genre/:genre?" component={ MainContent } exact/>
          <Route path="/film" component={ MainContent } />
          <Route path="/search/:search?" component={ MainContent } />
          
          <Suspense fallback={ <Loader /> }>            
            <Route path="/add"  component={ AddFilm } />
            <Route path="/edit/:film_id"  component={ EditFilm } />
          </Suspense>

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
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

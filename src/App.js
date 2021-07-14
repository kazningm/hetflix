import './App.css';
import Nav from './components/Navigation/Nav';
import { BrowserRouter } from "react-router-dom";
// import { Suspense } from 'react';
import MainContent from './components/Content/MainContent';

function App() {
  return (
    <>
    {/* <Suspense fallback={ <h1>waiting...</h1> }> */}
      <BrowserRouter>
        <Nav />
        <MainContent />
        <footer>
          футер
        </footer>
      </BrowserRouter>
      {/* </Suspense> */}
    </>
  );
}

export default App;

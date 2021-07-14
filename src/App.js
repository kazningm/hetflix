import './App.css';
import Nav from './components/Navigation/Nav';
import { BrowserRouter } from "react-router-dom";
import MainContent from './components/Content/MainContent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <MainContent />
        <footer>
          футер
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;

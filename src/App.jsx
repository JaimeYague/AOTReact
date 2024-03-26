import "./App.css";
// import AOTCharacters from "./layouts/AOTCharacters";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Titans from "./pages/Titans";
import Characters from "./pages/Characters";
import Localizations from "./pages/Localizations";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Titans" element={<Titans/>}/>
            <Route path="/Characters" element={<Characters />}/>
            <Route path="/Localizations" element={<Localizations/>}/>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

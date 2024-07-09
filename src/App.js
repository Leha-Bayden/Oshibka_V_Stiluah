import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Films from "./pages/films/Films.js";
import Forms from "./pages/forms/Forms";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/forms" element={<Forms/>}/>
                <Route exact path="/films" element={<Films/>}/>
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;

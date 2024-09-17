import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Startgame from "./pages/Startgame";
import Playgame from "./pages/Playgame";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startgame" element={<Startgame />} />
            <Route path="/playgame" element={<Playgame />} />
        </Routes>
    );
}

export default App;

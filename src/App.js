import "./App.css";
import Create from "./components/Create";
import AppNavbar from "./components/AppNavbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

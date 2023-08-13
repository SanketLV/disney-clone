import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

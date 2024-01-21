import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ts from './pages/Ts';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/ts" element={<Ts/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

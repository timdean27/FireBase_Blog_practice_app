import { useState, useEffect } from "react";
import "./App.css";
import "./style.scss";
import "./media-query.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import Detail from './pages/Detail';
import AddEditBlog from './pages/AddEditBlog';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Header from './components/Header';

function App() {
  const [active , setActive] = useState("home")
  return (
    <div className="App">
      <Header setActive={setActive} active={active}></Header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/create" element={<AddEditBlog/>}></Route>
        <Route path="/update:id" element={<AddEditBlog/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

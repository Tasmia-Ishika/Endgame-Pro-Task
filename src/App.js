import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {  Route, Routes } from 'react-router-dom';
import Calender from './Pages/Home/Calender';
import DoTask from './Pages/Home/DoTask';
import CompletedTask from './Pages/Home/CompletedTask';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
       <Route path="/calender" element={<Calender></Calender>}></Route>
       <Route path="/to-do" element={<DoTask></DoTask>}></Route>
       <Route path="/completedTask" element={<CompletedTask></CompletedTask>}></Route>
      </Routes>
    </div>
  );
}

export default App;

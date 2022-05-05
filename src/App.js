
import './App.css';
import LoginPage from './login/LoginPage';
import NavBar from './navbar/NavBar';
import Profile from './profile/Profile';

import Home from './home/Home';
import  Dashboard from './dash'
import './App.css';
import Main from './signup/signup'
import Book from './signup/register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>

      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
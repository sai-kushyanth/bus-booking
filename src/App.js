
import './App.css';
import LoginPage from './login/LoginPage';
import NavBar from './navbar/NavBar';
import Profile from './profile/Profile';

import Home from './home/Home';

import Dashboard from './dashboard/Dashboard';

import './App.css';
import Main from './signup/Signup'
import Book from './signup/Register';
import CustomerRegister from './signup/Customer'
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />}>
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
          </Route>
          <Route path="profile" element={<Profile />}>
          </Route>
          <Route path="login" element={<LoginPage />}>
          </Route>
          <Route path="signup" element={<Main />}>
          </Route>
          <Route path="customer" element={<CustomerRegister />}>
          </Route>
          <Route path="Book" element={<Book />}>
          </Route>
        </Routes>
      </BrowserRouter>

   



  );
}

export default App;
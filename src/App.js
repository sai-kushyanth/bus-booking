

import LoginPage from './login/LoginPage';
import NavBar from './navbar/NavBar';
import Profile from './profile/Profile';

import Home from './home/Home';

import Dashboard from './dashboard/Dashboard';
import BookingForm from './Fetch/Busbooking';
import BusInfo from './Fetch/BusInfo';
import './App.css';
import Main from './signup/Signup'
import Book from './signup/Register';
import AddBus from './Fetch/AddBus';
import CustomerRegister from './signup/Customer'
import BusList from './Fetch/Buslist';
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
          <Route path="driver" element={<Main />}>
          </Route>
          <Route path="customer" element={<CustomerRegister />}>
          </Route>
          <Route path="addbus" element={<AddBus />}>
          </Route>
          <Route path="buses" element={<BusList />}>
          </Route>
          <Route path="businfo" element={<BusInfo />}>
          </Route>
          <Route path="bookingform" element={<BookingForm />}>
          </Route>
        </Routes>
      </BrowserRouter>

   



  );
}

export default App;
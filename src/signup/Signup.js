import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import './Signup.css' ;
import {registerDriver} from '../actions/auth'
import {useNavigate} from "react-router-dom"



const initialState = {
    username : '',
    email : '',
    password1 :'',
    password2 : ''

}

function Main(){
  let navigate =useNavigate();

    const [driverData, setDriverData] = useState(initialState)
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(registerDriver(driverData))
        console.log(driverData)


    }

    return(
        <div className='signup'>
        <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="inputs">
          <label></label>
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            name="username"
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="Email"
            className="form-control"
            placeholder="Enter Email"
            name='email'
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password1'
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            name= 'password2'
            onChange={(e)=>setDriverData({...driverData, [e.target.name]:e.target.value})}
          />
        </div>
        {/* <div className="register-form-form-role">
          <p className="register-form-form-role-title">Sign up as : </p>
          <div className="register-form-form-role-container">
            <div className="register-form-form-role-user">
            <p className="cust" >Driver</p>
              <input type="radio" name="role" id="role" />
            </div>
            <div className="register-form-form-role-mover">
            <p className="cust" >Customer</p>
              <input type="radio" name="role" id="role" />
            </div>
          </div>
        </div> */}
        <div className="btn">
          <button type="submit" >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an account? <a href="/sign-in">Login</a>
        </p>
      </form>
      </div>

        
    )
}

export default Main;
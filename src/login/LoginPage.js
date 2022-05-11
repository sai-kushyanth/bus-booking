import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import {login} from '../actions/auth'
import './loginPage.css'

const initialState = {
    username : '',
    
    password:'',

}

function LoginRegister(){

    const [loginData, setLoginData] = useState(initialState)
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(loginData))
        // if (roles && roles.indexOf(currentUser.role) === -1) {
        //     // role not authorised so redirect to home page
        //     return <Redirect to={{ pathname: '/'}} />
        // }
        console.log(loginData)
    } 
    return(
        <div class="back">
            <div class="div-center">
                <div class="content">
                    <h3 className='text-center'>Login</h3>
                    <hr />
                    <form onSubmit={handleSubmit} type="post">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input class="form-control" type="text" name="username" onChange={(e)=>setLoginData({...loginData, [e.target.name]:e.target.value})} required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" class="form-control" onChange={(e)=>setLoginData({...loginData, [e.target.name]:e.target.value})} required/>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        <hr />
                        <button type="button" class="btn btn-link">Signup</button>
                        <button type="button" class="btn btn-link">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>

    )
 }

export default LoginRegister;
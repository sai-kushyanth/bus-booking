import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

import {login} from '../actions/auth'

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
        console.log(loginData)


    }

    
    return(
        <section id="signin">
            <div className="form-wrapper">
                <header className="form-head">
                    <h2>Login to Safiri</h2>
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="name-form">
                        <label for="name">USERNAME</label>
                        <input type="text" name="username" onChange={(e)=>setLoginData({...loginData, [e.target.name]:e.target.value})} required/>
                    </div>
                    <div className="email-form">
                        <label for="email">PASSWORD</label>
                        <input type="password" name="password" onChange={(e)=>setLoginData({...loginData, [e.target.name]:e.target.value})} required/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    )
 }

export default LoginRegister;
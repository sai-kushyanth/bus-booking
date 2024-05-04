import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import './Signup.css' ;
import logo from '../home/home-assets/safiri-logoo.png';
import {registerCustomer} from '../actions/auth'
import { HashLink as Link } from 'react-router-hash-link';


const initialState = {
    username : '',
    email : '',
    password1 :'',
    password2 : ''

}

function CustomerRegister(){

    const [customerData, setCustomerData] = useState(initialState)
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(registerCustomer(customerData))
        console.log(customerData)
    }
    const userRole= localStorage.getItem('userRole')
    const logout =()=>{
      localStorage.clear()
      window.location.reload()
      
    }

    return(
      <div>
        <div className="navbar">
        <div><a className="navbar-brand" href="#">
            <img src={logo} />
            </a>
            <a class="nav-item nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
             </div>
                
          <nav className="navbar navbar-expand-lg navbar">
            
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
               {userRole?(
                 <Link to='/' onClick={logout}>logout</Link>
               ):
               
               <>
                 <Link to='/login'>login</Link>
                <Link to='/customer'>sign up</Link>
                 </>
               }
                
                
              </div>
           </div>
       </nav>
        </div>

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
            onChange={(e)=>setCustomerData({...customerData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="Email"
            className="form-control"
            placeholder="Enter Email"
            name='email'
            onChange={(e)=>setCustomerData({...customerData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password1'
            onChange={(e)=>setCustomerData({...customerData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            name= 'password2'
            onChange={(e)=>setCustomerData({...customerData, [e.target.name]:e.target.value})}
          />
        </div>
       
        <div className="btn">
          <button type="submit">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an account? <Link to='/login'>login</Link>

        </p>
      </form>
      </div><br/><br/>
      <div className="footer-container">
          <div className="footer">
            <footer>
              <div class="row my-5 justify-content-center py-5">
                
                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <img src={logo} />
                  <h3 class="rights">Yeluri.</h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 bold-text ">
                    <b>MENU</b>
                  </h6>
                  <ul class="list-unstyled">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p class="mb-1">KPHB,p-747,opp kalamandir</p>
                  <p>Hyderabad</p>
                </div>
              </div>
              <div className="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p class="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span class="mx-2">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>{" "}
                  </p>
                  

                  <small className="rights">
                    <span>&#174;</span> All Rights Reserved.
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h6 class="mt-55 mt-2 text-muted bold-text">
                    <b>Customer care</b>
                  </h6>
                  <small>
                    {" "}
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    yeluricustomercare@gmail.com
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  <h6 class="text-muted bold-text">
                    <b>Yeluri Manager</b>
                  </h6>
                  <small>
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    yelurimanager@gmail.com
                  </small>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>

        
    )
}

export default CustomerRegister;
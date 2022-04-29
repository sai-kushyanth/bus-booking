import React, { Component } from 'react';
import './Home.css' ;
import bus1 from './home-assets/bus1.jpeg';
import bus2 from './home-assets/bus2.jpg';
import bus4 from './home-assets/bus5.jpeg';
import seat1 from './home-assets/seat1.jpeg';
import seat2 from './home-assets/seat2.jpeg';
import logo from './home-assets/safiri-logo.png';



export default function Home(){
    return (
      <div className="home-container">
        <div className="navbar">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src={logo} />
            </a>
            {/* <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
                <a class="nav-item nav-link" href="#">
                  About Us
                </a>
                <a class="nav-item nav-link" href="#">
                  Services
                </a>
                <a class="nav-item nav-link disabled" href="#">
                  Contact Us
                </a>
                <a class="nav-item nav-link disabled" href="#">
                  Login
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="image-container">
          <div className="intro">
            <h1>Welcome to Safiri</h1>

            <h4>Travel with confidence and luxury</h4>
          </div>
        </div>
        <div className="middle-image">
          {/* <img src={bus1}  /> */}
          <img src={bus2} />
          <img src={seat2} />
        </div>
        <div className="footer-container">
          <div className="footer">
            <footer>
              <div class="row my-5 justify-content-center py-5">
                
                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <img src={logo} />
                  <h3 class="rights">Safiri.</h3>
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
                  <p class="mb-1">605, Ngong Rd</p>
                  <p>Nairobi</p>
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
                    safiricustomercare@gmail.com
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  <h6 class="text-muted bold-text">
                    <b>Safiri Manager</b>
                  </h6>
                  <small>
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    safirimanager@gmail.com
                  </small>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
}
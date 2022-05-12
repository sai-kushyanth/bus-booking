import axios from "axios";
import "./Fetch.css";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../home/home-assets/safiri-logoo.png";
import Modal from "react-modal";
import seat3 from "../home/home-assets/seat3.jpg";

const baseURL = "https://backend-safiri.herokuapp.com/";

function MyBookings() {
  const [myBookings, setBusBookingInfo] = React.useState(null);
  

  React.useEffect(() => {
    getBusBooking();
  }, []);
  let getBusBookings = async () => {
    let response = await fetch(
      "https://backend-safiri.herokuapp.com/driver/api/bus/"
    );
    let data = await response.json();
    setBusBookingInfo(data);
  };
//   const handler = function(e){
//     localStorage.setItem('busId', e.target.getAttribute("data-index"));
//     localStorage.setItem('seatCost', e.target.getAttribute("data-test"));
//     console.log(e.target.getAttribute("data-index")); //will log the index of the clicked item
//     console.log(e.target.getAttribute("data-test")); //will log the index of the clicked item
// };

  console.log("fetched buses", busBookings);
  const logout =()=>{
    localStorage.clear()
    
  }

  return (
    <div>
      <div className="navbar">
        <div>
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <Link to="/">Home</Link>
        </div>

        <nav className="navbar navbar-expand-lg navbar">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/login" onClick={logout}>logout</Link>
              {/* <Link to='/customer'>sign up</Link> */}
            </div>
          </div>
        </nav>
      </div>
      <h1>Available buses</h1>
      <div style={{ margin: 50 }}>
        {buses ? (
          <div>
            <div className="container">
            <div className="row">
            {buses.map((bus, index) => (
              
                
                  <div className="col-md-4">
                    <div>
                      <div
                        className="card"
                        key={bus.id}
                        style={{ marginBottom: 20 }}
                      >
                        <img src={bus.bus_image} />
                        {/* <img src={seat3} /> */}
                        <div className="card-body">
                          <p className="card-text">
                            Bus Number: {bus.bus_number}
                          </p>
                          <p className="card-text">
                            cost per seat: {bus.cost_per_seat} Ksh
                          </p>
                          <p className="card-text">Route: {bus.route}</p>
                          <p className="card-text">Seats: {bus.seats}</p>
                          {bus.status == 1 ? (
                            <p className="card-text">Bus Status: Active</p>
                          ) : (
                            <p className="card-text">Bus Status: Inactive</p>
                          )}

                          <button>
                            <Link to="/bookingform" data-test={bus.cost_per_seat} data-index={bus.id} onClick={ handler}>Book Now</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                
             
            ))}; 
            </div>
            </div>
          </div>
        ) : (
          <div>
            <CircularProgress />
          </div>
        )}
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

export default MyBookings;

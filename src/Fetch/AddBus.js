import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { busbooking } from "../actions/auth";
import "./Fetch.css";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../home/home-assets/safiri-logoo.png";


const initialState = {
  user_name: "",
  phone_no: "",
  departure_point: "",
  destination: "",
  date: "",
  price: "",
  time: "",
  no_of_seats: "",
};

function AddBus() {
  const [bookingData, setBookingData] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(busbooking(bookingData));
    console.log(bookingData);
  };

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
              <Link to="/login">logout</Link>
              {/* <Link to='/customer'>sign up</Link> */}
            </div>
          </div>
        </nav>
      </div>
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2 >Booking Information</h2>
        <div className="inputs">
          <label>Bus Category</label>

          <input
            type="text"
            className="form-control"
            placeholder="eg.bus"
            name="category"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <label>
        Vehicle
        <select>
          <option value="bus">Bus</option>
          <option >Van</option>
          <option >Matatu</option>
        </select>
        onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
      </label>

        <div className="inputs">
          <label>Bus Image</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.upload image"
            name="bus_image"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Bus Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.123"
            name="bus_number"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Route</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.Nairobi-Mombasa"
            name="route"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>No. of Seats</label>
          <input
            type="date"
            className="form-control"
            placeholder="eg.22"
            name="seat"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Cost per Seat</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.100"
            name="cost_per_seat"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Departure Point</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.Nairobi"
            name="departure_point"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div className="inputs">
          <label>Destination</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.Nairobi"
            name="destination"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Driver</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.Steve"
            name="driver"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Bus Status</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.1 for active or 2 for inactive"
            name="status"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Departure Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.12.00 pm"
            name="departure_time"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="inputs">
          <label>Estimated Arrival Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.12.00 pm"
            name="arrival_time"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div className="btn">
          <button type="submit">Book</button>
        </div>
      </form>
    </div><br/><br/>
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
export default AddBus;

import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
// import './Signup.css' ;
import {busbooking} from '../actions/auth'
import { HashLink as Link } from 'react-router-hash-link';


const initialState = {
   user_name:'',
   phone_no:'',
   departure_point:'',
   destination:'',
   date:'',
   price:'',
   time:'',
   no_of_seats:'',


}

function BookingForm(){
   
    const [bookingData, setBookingData] = useState(initialState)
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(busbooking(bookingData))
        console.log(bookingData)


    }

    return(
        <div className='signup'>
        <form onSubmit={handleSubmit}>
        <h3>Booking Information</h3>
        <div className="inputs">
          <label>user name</label>
        
          <input
            type="text"
            className="form-control"
            placeholder="eg.03345677"
            name="user_name"
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>


        <div className="inputs">
          <label>Your Phone No.</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.03345677"
            name="phone_no"
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label>Departure Point</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.Nairobi"
            name='departure_point'
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label>Destination</label>
          <input
            type="text"
            
            className="form-control"
            placeholder="eg.Nairobi"
            name='destination'
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="eg.22-3-2000"
            name= 'date'
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label>Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.12.30"
            name= 'time'
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Kshs"
            name= 'price'
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
        
        <div className="inputs">
          <label>Number of Seats</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.3"
            name= 'no_of_seats'
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
        <div className="inputs">
          <label>bus id</label>
          <input
            type="text"
            className="form-control"
            placeholder="eg.3"
            name= 'bus_id'
            onChange={(e)=>setBookingData({...bookingData, [e.target.name]:e.target.value})}
          />
        </div>
       
        <div className="btn">
          <button type="submit">
            Book
          </button>
        </div>
        
      </form>
      </div>
    )
        
    


    
}
export default BookingForm;
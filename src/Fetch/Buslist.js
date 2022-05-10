import axios  from 'axios'
import React,{useState, useEffect} from 'react'
import { CircularProgress } from '@mui/material';




const baseURL = 'https://backend-safiri.herokuapp.com/';



function BusList(){
  const [buses, setBusInfo] = React.useState(null);

  React.useEffect(() => {
     getBuses()
    
  }, []);
let getBuses =async()=>{
    let response= await fetch('https://backend-safiri.herokuapp.com/driver/api/bus')
    let data = await response.json()
    console.log(data)
    setBusInfo(data)
}
// try {
//     axios.get(baseURL).then((response) => {
//         setBusInfo(response.data);
//         console.log(response.data)
//         console.log('buses',buses)
//       });
//   } catch (error) {
    //   console.log(error)
      
//   }
  // if (!post) return null;
  
  console.log('buses2222',buses)
    return(
        <div>
        <h1>Available buses</h1>
        <div style={{margin:50}}>
       {buses?(
           <div>{buses.map((bus,index)=>(
            <div className="card" key={bus.id} style={{marginTop:20}}>
            <img src={bus.bus_image.image} style={{width: 300, height: 200}}/>
            <div className="card-body">
              <h5 className="card-title">{bus.bus_number}</h5>
              <p className="card-text">{bus.cost_per_seat}</p>
              <p className="card-text">{bus.route}</p>
              <p className="card-text">{bus.seats}</p>
              <p className="card-text">{bus.status}</p>
              <a href="#" className="btn btn-primary">Book Now</a>
            </div>
          </div>

            
   

   ))};</div>

       ):<div><CircularProgress/></div>}
        
   
        </div>
       
            
        </div>
        
   
      

        
    );
};

export default BusList;
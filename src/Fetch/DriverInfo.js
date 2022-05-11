import axios  from 'axios'
import React,{useState, useEffect} from 'react'
import { CircularProgress } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';

import Modal from 'react-modal';






const baseURL = 'https://backend-safiri.herokuapp.com/';



function BusList(){
  const [buses, setBusInfo] = React.useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
     getBuses()
    
  }, []);
let getBuses =async()=>{
    let response= await fetch('https://backend-safiri.herokuapp.com/driver/api/bus')
    let data = await response.json()
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
  
  console.log('fetched buses',buses)
    return(
        <div>
        <h1>Available buses</h1>
        <div style={{margin:50}}>
       {buses.diver==loginuser.id?(
           <div>{buses.map((bus,index)=>(
            <div className="card" key={bus.id} style={{marginTop:20}}>
            <img src={bus.bus_image} style={{width: 300, height: 200}}/>
            <div className="card-body">
              <h5 className="card-title">{bus.bus_number}</h5>
              <p className="card-text">{bus.cost_per_seat}</p>
              <p className="card-text">{bus.route}</p>
              <p className="card-text">{bus.seats}</p>
              <p className="card-text">{bus.status}</p>
              <Link to='/bookingform'>Book Now</Link>
            </div>

           {/* <button className="nextButton" onClick={handleShow}>open modal</button> */}



            {/* <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button> */}


{/* <button onClick={openModal}>Open Modal</button>
      <Modal
        // isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}





          </div>

            
   

   ))};</div>

       ):<div><CircularProgress/></div>}
        
   
        </div>
       
            
        </div>
        
   
      

        
    );
};

export default BusList;
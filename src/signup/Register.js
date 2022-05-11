import axios  from 'axios'
import React,{useState, useEffect} from 'react'
import './Signup.css'
import { HashLink as Link } from 'react-router-hash-link';


const baseURL = 'https://backend-safiri.herokuapp.com/driver/api/bus';

// export default function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;
// const BusList = ()=>{
//   let [buses, setBuses] = useState([])
//   useEffect(()=>{
//     getbuses()
//   },[])

//   let getbuses =async()=>{
//     try {
//       let response =await(fetch('https://backend-safiri.herokuapp.com/customers/api/busbooking'))
//     let data = await response.json()
//     setBuses(data)
//     console.log(data)
      
//     } catch (error) {
//       console.log(error)
//     }
    
//   }

// }

function Book(){
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  // if (!post) return null;
  

    return(

   
      <form className='book'>
      <label>
        Vehicle
        <select>
          <option value="bus">Bus</option>
          <option >Van</option>
          <option >Matatu</option>
        </select>
      </label>
      <label>
        From
        <select>
          <option value="grapefruit">Nairobi</option>
          <option>Mombasa</option>
          <option>Nakuru</option>
          <option>Kisumu</option>
        </select>
      </label>
      <label>
        To
        <select>
          <option value="grapefruit">Nairobi</option>
          <option>Nakuru</option>
          <option>Mombasa</option>
          <option></option>
        </select>
      </label>
      <label> Departure date :
        <input placeholder='Departure date' type="date" id="name"/>
      </label>
      <input type="submit" value="Book a vehicle" />
    </form>

        
    )
}

export default Book;
// eslint-disable-next-line no-unused-vars

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componant/Navbar';
import Carousel from './Componant/Carousel';
import PersonComp from './Componant/PersonComp';
import FeedbackForm from './Componant/FeedbackForm';
// // eslint-disable-next-line no-unused-vars

// // eslint-disable-next-line no-unused-vars
// import axios from "axios";
// // eslint-disable-next-line no-unused-vars
// import { useState,useEffect } from "react";

function App() {
  // const[data,setData] = useState([])
  // useEffect(() =>{
  //   // eslint-disable-next-line no-undef
  //   getData()
  // },[])
  // const getData=()=>{
  //   axios("https://jsonplaceholder.typicode.com/posts").then(res=>setData(res.data));
  // };
  return (
   
      
      <><Navbar /><Carousel /><PersonComp/><FeedbackForm/></>
      
  ) 
  
}

export default App;

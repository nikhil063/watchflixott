import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const Paymentsuccess=()=>{
    
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const paymentId = searchParams.get('paymentId');


  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", borderWidth:"0.1vw", borderColor:"white", padding:"6vw", margin:"3vw 6vw" , borderRadius:"2vw"}}>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"0 1vw 1vw"}}>
          <h1 style={{color:"white", fontSize:"3vw", fontFamily:"Poppins"}}>Payment Successful!</h1> <FaCheck style={{color:"white", width:"8vw",height:"8vw", padding:"1vw", borderRadius:"100vw", borderWidth:"0.2vw", borderColor:"white", backgroundColor:"green"}} />
      </div>
      <div style={{display:"flex", }}>
          <p style={{color:"#A8A8A8", fontSize:"1.6vw", padding:"0.8vw", fontFamily:"Poppins"}}>Your payment ID is:</p> <p style={{color:"#A8A8A8", fontSize:"1.6vw", padding:"0.8vw", fontFamily:"Poppins", fontStyle:"bold"}}>{paymentId}</p>
      </div>
    </div>
  );
}

export default Paymentsuccess;
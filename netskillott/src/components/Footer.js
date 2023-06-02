import { Flex } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", padding: "0px", backgroundColor: "black", color: "white", justifyContent: "space-between", margin: "0", width:"100%" }}>
        
        
        
        <Flex ml="6vw" mt="3vw" mb='1vw' justifyContent="flex-start" >
                <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "2.5vw", color: "#FFFFFF" }}>Watch</p><p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "2.5vw", color: "#DA3714" }}>Flix</p>
            </Flex>
        
        

        
         <Flex mx="2vw" justifyContent="space-between" w="96vw" mt='4vw'>
           
           <Flex justifyContent='space-between' mx='2vw'>

             <div style={{ marginBottom: "30px" }}>
               <h1  style={{ fontFamily: "Overpass", fontSize: "2vw", fontWeight: "700", marginBottom: "1vw", color: "#DA3714" }}>Connect Us</h1>
               <div style={{ fontFamily: "Overpass", color: "#4D5053", display: "flex", flexDirection: "column", fontSize: "2vw", marginBottom: "18px" }}>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-About</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Contact Us</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Help center</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Career</button>
               </div>
             </div>
           </Flex>
           <Flex mx='2vw'>
             <div style={{ marginBottom: "2vw" }}>
               <h1 style={{ fontFamily: "Overpass", fontSize: "2vw", fontWeight: "700", marginBottom: "1vw", color: "#DA3714" }}>Manage </h1>
               <div style={{ fontFamily: "Overpass", color: "#4D5053", display: "flex", flexDirection: "column", fontSize: "2vw", marginBottom: "18px" }}>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Account</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Manage Account</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Buy Gift Card</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Redeem Gift Card</button>
               </div>
             </div>
           </Flex>
           <Flex mx='2vw'>
             <div>
               <h1  style={{ fontFamily: "Overpass", fontSize: "2vw", fontWeight: "700", marginBottom: "1vw", color: "#DA3714" }}>Information </h1>
               <div style={{ fontFamily: "Overpass", color: "#4D5053", display: "flex", flexDirection: "column", fontSize: "2vw", marginBottom: "18px" }}>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Privacy</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Terms & Condition</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-Cookies</button>
                 <button style={{ color: "white", background: "none", marginBottom: "1vw", textAlign: "initial", fontSize:"1.2vw" }}>-FAQ</button>
               </div>
             </div>
           </Flex>
                  
         </Flex>
      </div>
    </>
  );
}

export default Footer;






// import React from 'react'

// function Footer() {
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "space-between", padding:"0px", backgroundColor:"black", color:"white", margin:"0px", height:"227px" }} >
//         <div style={{padding:"90px 48px", display:"flex"}}>
//           <p style={{fontFamily:"Oswald", fontWeight:"700", fontSize:"32px", lineHeight:"47px", color:"#FFFFFF"}}>Watch</p><p style={{fontFamily:"Oswald", fontWeight:"700", fontSize:"32px", lineHeight:"47px", color:"#DA3714"}}>Flix</p>
//         </div>

//         <div style={{height:"127px", display: "flex", justifyContent: "space-between", marginRight:"140px", width:"975px", paddingTop:"48px"}}>
//             <div>
//               <h1 style={{ fontFamily: "Overpass", fontSize: "24px", fontWeight: "700", marginBottom: "10px", color:"#DA3714", lineHeight:"30px" }} >Connect Us</h1>
//               <div style={{ fontFamily: "Jost", color: "#FFFFFF", display: "flex", flexDirection: "column", fontSize: "12px" }}>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-About</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Contact Us</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Help center</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Career</button>
//               </div>
//             </div>
//             <div>
//               <h1 style={{ fontFamily: "Overpass", fontSize: "24px", fontWeight: "700", marginBottom: "10px", color:"#DA3714", lineHeight:"30px" }} >Manage </h1>
//               <div style={{ fontFamily: "Jost", color: "#4D5053", display: "flex", flexDirection: "column", fontSize: "22px", marginBottom: "18px" }}>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Account</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Manage Account</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Buy Gift Card</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Redeem Gift Card</button>
//               </div>
//             </div>
//             <div>
//               <h1 style={{ fontFamily: "Overpass", fontSize: "24px", fontWeight: "700", marginBottom: "10px", color:"#DA3714", lineHeight:"30px" }} >Information </h1>
//               <div style={{ fontFamily: "Jost", color: "#4D5053", display: "flex", flexDirection: "column", fontSize: "22px", marginBottom: "18px" }}>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Privacy</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Terms & Condition</button>
//                 <button style={{color:"white", background:"none",marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-Cookies</button>
//                 <button style={{color:"white", background:"none", marginBottom:"9px", lineHeight:"15px", textAlign:"initial"}}>-FAQ</button>
//               </div>
//             </div>

//         </div>




       



        

//       </div>

      
//     </>
//   )
// }

// export default Footer

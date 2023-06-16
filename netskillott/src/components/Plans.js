import React, { useState } from 'react'
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';


const Plans = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleButtonClick = (buttonName, amount) => {
    setActiveButton(buttonName);
    setSelectedPlan(amount);
  };



  function loadRazorpayScript() {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = resolve;
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async () => {
    if (selectedPlan) {
      const amount = parseFloat(selectedPlan) * 100;
      try {
        await loadRazorpayScript();

        const options = {
          key: 'rzp_test_BZKmSXpXrgRayL',
          currency: 'INR',
          amount: amount,
          name: 'watchflix',
          description: 'Enjoy uninterrupted streaming!',
          image: '',
          handler: async function (response) {
            // alert("Payment successful!")
            const paymentId = response.razorpay_payment_id;
            console.log(paymentId);
            window.location.href = `/success?paymentId=${paymentId}`;
          },

          theme: {
            color: '#8A0303',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        console.error('Failed to load Razorpay script:', error);
      }
    } else {
      console.error('No plan selected');
    }
  };


  const activeButtonStyles = {
    borderColor: 'white',
    position: 'relative',
  };

  const checkmarkStyles = {
    position: 'absolute',
    top: '0.2vw',
    right: '0.2vw',
    color: 'white',
    backgroundColor: 'green',
    borderRadius: "50vw",
    padding: "0.3vw",
    height: "1.5vw",
    width: "1.5vw"
  };



  const renderDetailsTable = () => {
    if (activeButton === 'Mobile') {
      return <div style={{ borderColor: "white", borderWidth: "0.1vw", borderRadius: "0.5vw", margin: "0 0 2vw" }}>

        <table style={{ fontFamily: "Poppins", margin: "2vw", }}>
          <thead >
            <tr>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Features</th>
              <th style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial", color: "black", backgroundColor: "#ff2e2e", borderRadius: "0.2vw 0.2vw 0 0" }}>Mobile</th>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Premium HD</th>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Premium 4k</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Ad free</td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }} ><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Live TV</td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Premium content</td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }} ><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Device</td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e", borderRadius: " 0 0 0.2vw 0.2vw" }}><FaTimes style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>

          </tbody>
        </table>
        <div style={{ color: "white", fontFamily: "Poppins", fontSize: "2vw", display: "flex", justifyContent: "center", alignItems: "center", margin: "1vw 0 2vw" }}><button style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "green", padding: " 0.8vw 1.6vw", borderRadius: "0.5vw", width: "22vw" }} onClick={displayRazorpay}>
          <p style={{ fontFamily: "Poppins", fontSize: "1.4vw" }}>Proceed to payment </p><FaArrowRight style={{ width: "1.5vw", height: "1.5vw" }} />
        </button></div>
      </div>;
    } else if (activeButton === 'Premium HD') {
      return <div style={{ borderColor: "white", borderWidth: "0.1vw", borderRadius: "0.5vw", margin: "0 0 2vw" }}>

        <table style={{ fontFamily: "Poppins", margin: "2vw" }}>
          <thead >
            <tr>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Features</th>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Mobile</th>
              <th style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial", color: "black", backgroundColor: "#ff2e2e", borderRadius: "0.2vw 0.2vw 0 0" }}>Premium HD</th>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Premium 4k</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Ad free</td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Live TV</td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Premium content</td>
              <td style={{ padding: "0 1.5vw", color: "white" }} ><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}> <FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Device</td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaTimes style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e", borderRadius: " 0 0 0.2vw 0.2vw" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>

          </tbody>
        </table>
        <div style={{ color: "white", fontFamily: "Poppins", fontSize: "2vw", display: "flex", justifyContent: "center", alignItems: "center", margin: "1vw 0 2vw" }}><button style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "green", padding: " 0.8vw 1.6vw", borderRadius: "0.5vw", width: "22vw" }} onClick={displayRazorpay}>
          <p style={{ fontFamily: "Poppins", fontSize: "1.4vw" }}>Proceed to payment </p><FaArrowRight style={{ width: "1.5vw", height: "1.5vw" }} />
        </button></div>
      </div>;
    } else if (activeButton === 'Premium 4k') {
      return <div style={{ borderColor: "white", borderWidth: "0.1vw", borderRadius: "0.5vw", margin: "0 0 2vw" }}>

        <table style={{ fontFamily: "Poppins", margin: "2vw" }}>
          <thead >
            <tr>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Features</th>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Mobile</th>
              <th style={{ fontFamily: "Poppins", color: "white", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Premium HD</th>
              <th style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial", color: "black", backgroundColor: "#ff2e2e", borderRadius: "0.2vw 0.2vw 0 0" }}>Premium 4k</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Ad free</td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Live TV</td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Premium content</td>
              <td style={{ padding: "0 1.5vw", color: "white" }} ><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}> <FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>
            <tr>
              <td style={{ fontFamily: "Poppins", color: "white", fontWeight: "400", fontSize: "1vw", padding: "0.2vw 1vw", textAlign: "initial" }}>Device</td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaTimes style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ padding: "0 1.5vw", color: "white" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
              <td style={{ color: "black", padding: "0 1.5vw", backgroundColor: "#ff2e2e", borderRadius: " 0 0 0.2vw 0.2vw" }}><FaCheck style={{ width: "1.5vw", height: "1.5vw" }} /></td>
            </tr>

          </tbody>
        </table>
        <div style={{ color: "white", fontFamily: "Poppins", fontSize: "2vw", display: "flex", justifyContent: "center", alignItems: "center", margin: "1vw 0 2vw" }}><button style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "green", padding: " 0.8vw 1.6vw", borderRadius: "0.5vw", width: "22vw" }} onClick={displayRazorpay}>
          <p style={{ fontFamily: "Poppins", fontSize: "1.4vw" }}>Proceed to payment </p><FaArrowRight style={{ width: "1.5vw", height: "1.5vw" }} />
        </button></div>
      </div>;
    } else {
      return null;
    }
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1vw" }}>
        <h1 style={{ fontSize: "2.5vw", fontStyle: "bold", color: "white", fontFamily: "Poppins" }}>Choose your premium plan</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{renderDetailsTable()}</div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 0 2vw" }}>
          <button onClick={() => handleButtonClick('Mobile', 499)} style={{ color: "white", background: "linear-gradient( #8B0000, #000000)", borderColor: "red", borderWidth: "0.1vw", borderRadius: "0.5vw", padding: "0.8vw 2vw", fontFamily: "Poppins", ...(activeButton === 'Mobile' && activeButtonStyles) }}>
            <p style={{ fontSize: "1vw", }}>Mobile</p>
            <p style={{ fontStyle: "bold", fontSize: "2vw" }}>₹499</p>
            <p style={{ fontSize: "1vw", }}>12 months</p>
            {activeButton === 'Mobile' && <FaCheck style={checkmarkStyles} />}
          </button>
          <button onClick={() => handleButtonClick('Premium HD', 699)} style={{ color: "white", background: "linear-gradient( #8B0000, #000000)", borderColor: "red", borderWidth: "0.1vw", borderRadius: "0.5vw", padding: "2vw 4vw", margin: "0vw 0.4vw", fontFamily: "Poppins", ...(activeButton === 'Premium HD' && activeButtonStyles) }}>
            <p style={{ fontSize: "1vw", }}>Premium HD</p>
            <p style={{ fontStyle: "bold", fontSize: "4vw" }}>₹699</p>
            <p style={{ fontSize: "1vw", }}>12 months</p>
            {activeButton === 'Premium HD' && <FaCheck style={checkmarkStyles} />}
          </button>
          <button onClick={() => handleButtonClick('Premium 4k', 999)} style={{ color: "white", background: "linear-gradient( #8B0000, #000000)", borderColor: "red", borderWidth: "0.1vw", borderRadius: "0.5vw", padding: "1vw 2vw", fontFamily: "Poppins", ...(activeButton === 'Premium 4k' && activeButtonStyles) }}>
            <p style={{ fontSize: "0.8vw", }}>Premium 4k</p>
            <p style={{ fontStyle: "bold", fontSize: "2vw" }}>₹999</p>
            <p style={{ fontSize: "1vw", }}>12 months</p>
            {activeButton === 'Premium 4k' && <FaCheck style={checkmarkStyles} />}
          </button>
        </div>

      </div>
    </>
  )
}

export default Plans

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Qr(){

    const location=useLocation();
    const navigate=useNavigate();

    const qrCode=location.state?.qrCode;

    return <div className="result">
        <h3>Your QR Code is....</h3>
        <img src={qrCode} alt="qr Code" style={{height: "300px"}} /><br />
        <a href="/"><button>Generate again</button></a>
    </div>
}

export default Qr;
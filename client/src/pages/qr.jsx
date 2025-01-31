import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Qr(){

    const location=useLocation();
    const navigate=useNavigate();

    const qrCode=location.state?.qrCode;

    return <div className="result">
        <h3>Your QR Code is....</h3>
        <img src={qrCode} alt="qr Code" className="qrimage" /><br />
        <a href="/"><button type="button" className="btn btn-success">Generate again</button></a>
    </div>
}

export default Qr;
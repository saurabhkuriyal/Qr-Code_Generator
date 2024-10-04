import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import "./Home.css";
function Home() {

    const [url, enteredURL] = useState(" ");
    const navigate = useNavigate();

    function handleChange(event) {
        const value = event.target.value;
        enteredURL(value);
    }

    async function print(event) {
        event.preventDefault();
        try {
            const response = await axios.post('https://qr-code-generator-4oni.onrender.com/submit', { data: url });

            const qrCode = response.data.src;

            navigate('/display_qr', { state: { qrCode } });

        } catch (error) {
            console.log(error);

        }
    }

    return <>
        
        <Hero/>
        

        {/* this is form */}
        <div className="container">
            <div className="box" id="QrSection">
                <h1>Generate you Qr here...</h1>
                <div className="form">
                    <h2>Enter your URL</h2>
                    <form action="/submit" onSubmit={print} className="entry">
                        <label htmlFor="URL">Enter your URL Here</label><br /><br />
                        <input type="text" onChange={handleChange} placeholder="enter Here" name="URL" /><br /><br />
                        {/* <input type="submit" value="Generate" /> */}
                        <button type="button" class="btn btn-secondary">Generate</button>
                    </form>
                </div>
            </div>
        </div>

        <Feature/>
    </>
}

export default Home;
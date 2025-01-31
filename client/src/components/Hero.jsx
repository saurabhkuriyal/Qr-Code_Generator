import React from "react";

function Hero() {

    return <>
        <div className="container col-xxl-8 px-4 border-bottom border-dark">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="/qr4.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Secured Qr Code Generator</h1>
                    <p className="lead">Simply paste link of your social media or anything and get custom and secured Qr code</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a href="#QrSection" ><button type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="ucgz9">Generate</button></a>
                        {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="9tk5c8">Default</button> */}
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default Hero;
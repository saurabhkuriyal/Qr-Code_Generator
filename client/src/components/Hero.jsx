import React from "react";

function Hero() {

    return <>
        <div class="container col-xxl-8 px-4 border-bottom border-dark">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="/qr4.jpeg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Secured Qr Code Generator</h1>
                    <p class="lead">Simply paste link of your social media or anything and get custom and secured Qr code</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a href="#QrSection" style={{color:"black"}}><button type="button" class="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="ucgz9">Generate</button></a>
                        {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="9tk5c8">Default</button> */}
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default Hero;
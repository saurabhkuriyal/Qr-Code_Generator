import React from "react";

function Feature() {
    return <>
        {/* <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Specification</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Custom</h3>
                    <p>Generate you personal Qr code with ease in seconds</p>

                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Secured</h3>
                    <p>Yor data remain secured and doesn't shared with anyone</p>

                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">No thrid party</h3>
                    <p>There is no third party involvement in this project</p>

                </div>
            </div>
        </div> */}
        <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Specifications</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col d-flex align-items-start">
                    <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 rounded-3">
                        {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-sliders m-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="fs-2 text-body-emphasis">Custom</h3>
                        <p>Generate you personal Qr code with ease in seconds</p>
                        {/* <a href="#" className="btn btn-primary">
                            Primary button
                        </a> */}
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 rounded-3">
                        {/* <svg className="bi" width="3em" height="3em"><use xlink:href="#cpu-fill"></use></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-shield m-2" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="fs-2 text-body-emphasis">Secured</h3>
                        <p>Yor data remain secured and doesn't shared with anyone</p>
                        {/* <a href="#" className="btn btn-primary">
                            Primary button
                        </a> */}
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 rounded-3">
                        {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-ban m-2" viewBox="0 0 16 16">
                            <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="fs-2 text-body-emphasis">No Third Party</h3>
                        <p>There is no third party involvement in this project</p>
                        {/* <a href="#" className="btn btn-primary">
                            Primary button
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Feature;
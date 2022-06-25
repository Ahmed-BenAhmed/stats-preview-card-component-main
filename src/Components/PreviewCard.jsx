import React from "react"

const PreviewCard = () => {
    return <div className="preview-card">
                <div className="container">
                    <div className="row direction">
                        <div className="col-12 col-md-6">
                            <div className="left-side">
                                <h2>
                                    Get <span className="highlighted">insights</span> that help your business grow.
                                </h2>
                                <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                                <ul className="statistics">
                                    <li>
                                        <div className="title">10k+</div>
                                        <div className="content">COMPANIES</div>
                                    </li>
                                    <li>
                                        <div className="title">314</div>
                                        <div className="content">TEMPLATES</div>
                                    </li>
                                    <li>
                                        <div className="title">12M+</div>
                                        <div className="content">QUERIES</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6" style={{padding: 0}}>
                            <div className="right-side">
                                <div className="img-container">
                                    <div className="overlay"></div>
                                    <div className="background-img"></div>
                                    {/* <img src="" alt="image header desktop" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
}

export default PreviewCard
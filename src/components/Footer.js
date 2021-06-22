import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="pt-2">
                <div className="container my-container">
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <img src="img/logo.png" alt="" srcset="" class="img-fluid mb-3"/>
                            <p>
                                All in one cloud centralized database solution to <br/> improve your logistics and freight <br/>
                                forwarding operations.
                            </p>
                            <div className="d-flex align-items-center justify-content-start text-center mb-3">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-3">
                            <h3>More Info</h3>
                            <ul className="list-group d-flex flex-column">
                                <li className="mb-2"><i className="fas fa-chevron-right"></i> Home</li>
                                <li className="mb-2"><i className="fas fa-chevron-right"></i> Discover Onlogis</li>
                                <li className="mb-2"><i className="fas fa-chevron-right"></i> Pricing Plans</li>
                                <li className="mb-2"><i className="fas fa-chevron-right"></i> Onlogis Support</li>
                                <li><i className="fas fa-chevron-right"></i> We are close to you</li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto">
                            <h3>Get in touch</h3>
                            <p className="mb-3">
                                Give us a call or send us an email and we
                                will get back to you as soon possible
                            </p>
                            <p className="mb-3">
                                <i className="fas fa-home me-1"></i>
                                Simba Solution Limitied 71-75 Shelton Street <br />
                                Covert Garden, London WC2h 9JQ <br />
                                UTR: 43133 27262
                            </p>
                            <p>
                                <i class="fas fa-envelope me-2"></i>
                                Info@onlogis.com
                            </p>
                            <p>
                                <i class="fas fa-phone-alt me-2"></i>
                                + 442037692827
                            </p>
                        </div>
                    </div>
                </div>
                <div className="copy p-3">
                    <p className="lead text-center text-white pt-2">
                        &copy; Onlogis. all rights reserved.
                    </p>
                </div>
            </footer>
           
        </>
    )
}

export default Footer;

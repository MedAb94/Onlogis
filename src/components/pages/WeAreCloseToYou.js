import React from 'react';
import '../../App.css';
import '../closeToYou.css';

function WeAreCloseToYou() {
    return (
        <>
            <div className="mb-5" style={{ background: '#F6F8FA', minHeight: '700px', width: '100%' }}>
                <div className="bg">
                    <img src="img/vector 11.png" className="img-fluid w-100" alt="" srcset="" />
                </div>
                <div className="container my-container mt-3">
                    <div className="row">
                        <div className="col-md-3 me-auto">
                            <img src="img/team-1.png" className="img-fluid" alt="" />
                            <div className="bx-profile p-3">
                                <h5 className="fs-5 fw-normal lh-base mb-0" style={{ color: "#ED7117" }}>Sabrina Brooks</h5>
                                <h6 className="fs-6 fw-normal lh-base">Account Manager</h6>
                            </div>
                        </div>
                        <div className="col-md-3 me-auto">
                            <img src="img/team-1.png" className="img-fluid" alt="" />
                            <div className="bx-profile p-3">
                                <h5 className="fs-5 fw-normal lh-base mb-0" style={{ color: "#ED7117" }}>Sabrina Brooks</h5>
                                <h6 className="fs-6 fw-normal lh-base">Account Manager</h6>
                            </div>
                        </div>
                        <div className="col-md-3 me-auto">
                            <img src="img/team-1.png" className="img-fluid" alt="" />
                            <div className="bx-profile p-3">
                                <h5 className="fs-5 fw-normal lh-base mb-0" style={{ color: "#ED7117" }}>Sabrina Brooks</h5>
                                <h6 className="fs-6 fw-normal lh-base">Account Manager</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-us w-100" style={{ background: "#fff", minHeight: '700px' }}>
                <div className="container my-container">
                    <div className="row">
                        <div className="col-md-5 mt-5 me-auto">
                            <h1 className="fs-2 fw-normal lh-base" style={{ color: '#ED7117' }}>Get in touch</h1>
                            <p className="lead fs-6 lh-base" style={{ color: '#797979' }}>
                                Give us a call or send us an email and we will get back to you as soon possible
                            </p>
                            <form>
                                <div className="form-group mb-3 position-relative">
                                    <input type="text" placeholder="   First Name" />
                                    <i class="fas fa-user"></i>
                                </div>
                                <div className="form-group mb-3 position-relative">
                                    <input type="email" placeholder="   Email" />
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div className="form-group mb-3 position-relative">
                                    <input type="text" placeholder="   Phone" />
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div className="form-group mb-3 position-relative">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Message">

                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 mt-5" style={{ color: '#797979' }}>
                            <p className="lead fs-6 mb-3">
                                <i className="fas fa-home me-1"></i>
                                Simba Solution Limitied 71-75 Shelton Street <br />
                                Covert Garden, London WC2h 9JQ <br />
                                UTR: 43133 27262
                            </p>
                            <p className="lead fs-6 mb-3">
                                <i class="fas fa-envelope me-2"></i>
                                Info@onlogis.com
                            </p>
                            <p className="lead fs-6 mb-3">
                                <i class="fas fa-phone-alt me-2"></i>
                                + 442037692827
                            </p>
                            <img src="img/adress.png" className="img-fluid mt-5" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeAreCloseToYou;

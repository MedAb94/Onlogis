import React from 'react';
import './Features.css';

function Features() {
    return (
        <div className="features p-sm-5 p-lg-0 w-100" style={{ background: '#fff', minHeight: '800px' }}>
            <div className="container my-container">
                <div className="row text-center">
                    <h1 className="fs-1 fw-bold lh-base" style={{ color: '#797979' }}>Onlogis Distinguishing <span style={{ color: '#ED7117' }}>Features</span></h1>
                    <div className="line"></div>
                </div>
                <div className="row align-items-center justify-content-between mt-5">
                    <div className="col-md-5">
                        <img src="img/11.png" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="col-md-5 pt-5">
                        <div className="row">
                            <div className="col-md-4 text-center col-sm-12 col-xs-12 mb-3">
                                <div className="circle mx-auto">
                                    <img src="img/319.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 text-md-start text-center col-sm-12">
                                <h3 className="fs-5 lh-sm fw-normal" style={{ color: '#ED7117' }}>Real time dashboard</h3>
                                <p className="fs-6 fw-normal">
                                    With Onlogis decision makers have the possibility to visualize a  real time dashboard that incorporates key indicators for logistics operations management thus getting complete visibility and control
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 text-center col-sm-12 col-xs-12 mb-3">
                                <div className="circle mx-auto">
                                    <img src="img/319.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 text-md-start text-center col-sm-12">
                                <h3 className="fs-5 lh-sm fw-normal" style={{ color: '#ED7117' }}>Fully integrated departments in one centralize Database </h3>
                                <p className="fs-6 fw-normal">
                                    Onlogis incorporates  several departments including financial, HR , Operations management, CRM into one centralize database for a  complete digital transformation of the company different operations.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 text-center col-sm-12 col-xs-12 mb-3">
                                <div className="circle mx-auto">
                                    <img src="img/319.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 text-md-start text-center col-sm-12">
                                <h3 className="fs-5 lh-sm fw-normal" style={{ color: '#ED7117' }}>Reporting tools destinated for decision markers</h3>
                                <p className="fs-6 fw-normal">
                                    (Onlogis provides a robust analysis and reporting tool for decision makers and business users. It incorporates «real-time» dashboards and reporting. This tool simplifies key decision making with its comprehensive reporting system and enable informed decision making with its intuitive reporting)
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 text-center col-sm-12 col-xs-12 mb-3">
                                <div className="circle mx-auto">
                                    <img src="img/319.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 text-md-start text-center col-sm-12">
                                <h3 className="fs-5 lh-sm fw-normal" style={{ color: '#ED7117' }}>Specific functionalities dedicated for logistics companies</h3>
                                <p className="fs-6 fw-normal">
                                    The solution combines all the information you need in one system. The flexible system design allows you to set the different modules to your specific needs).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;

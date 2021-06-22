import React from 'react';
import './Whyonlogis.css';

function Whyonlogis() {
    return (
        <div className="why-onlogis p-sm-5 p-lg-0 text-center text-sm-start mt-5 w-100" style={{ background: '#fff', minHeight: '800px' }}>
            <div className="container my-container">
                <div className="row text-center">
                    <h1 className="fs-1 fw-bold lh-base" style={{ color: '#797979' }}>Why <span style={{ color: '#ED7117' }}>Onlogis</span></h1>
                    <div className="line"></div>
                    {/* <p className="fs-5 lead my-4 lh-base">
                        We provide a Free Trial that include core modules such as: Invoicing, Operations and
                        Accounting but for one user only
                    </p> */}
                </div>
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h4 className="mb-4 fs-4 lh-base" style={{ color: '#ED7117' }}>
                            Visibility and control over your operations anywhere and anytime...
                        </h4>
                        <p className="fs-6 lh-base">
                            Onlogis  ERP is a specialized solution dedicated to managing freight forwarding operations, the internal and external management of your company. With Onlogis functionalities, we make sure to respond to all your functional needs , provide you with a complete real-time visibility and control for all your operations , seize  you opportunities successfully, improve your logistics operations thus overcoming challenges;  and create significant value for customers and your business.
                            Specialized solution
                        </p>
                        {/* <p className="fs-6 lh-base">
                            With this expertise, our solution will accompany you in your projects, thus giving you a
                            complete real-time view to all your operations. This will give you a great control over your
                            challenges, to seize opportunities successfully and create significant value for customers and
                            your business.
                        </p> */}
                    </div>
                    <img src="img/dashboard.png" class="img-fluid" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Whyonlogis;

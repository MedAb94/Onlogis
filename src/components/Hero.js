import React from 'react';
import './Hero.css';
import {Button} from './Button';

function Hero() {
    return (
        <>
            <div className="hero p-sm-5 p-lg-0 text-center text-sm-start" style={{ background: '#f7f7f7' }}>
                <div className="container my-container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="text-center text-sm-start">
                            <h1 className="text-uppercase fs-1 fw-bold">Weclome to <span style={{ color: '#ED7117' }}>Onlogis</span></h1>
                            <p className="fs-4 lead my-sm-4 fw-bold lh-base" style={{ color: '#797979' }}>
                                The revolutionary CLOUD ERP all in one integrated based Solution for Logistics and Freight Forwarding Companies
                            </p>
                            <Button buttonStyle="btn-primary" buttonSize="btn-lg">Get a plan</Button>
                        </div>
                        <img src="img/banner 2.svg" className="img-fluid w-sm-50 mt-5" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;

import React from 'react';
import './Clients.css';
import Carousel from 'react-elastic-carousel';

function Clients() {
    const breakPoints = [
        {
            width: 500,
            itemsToShow: 1
        },
        {
            width: 768,
            itemsToShow: 3
        },
        {
            width: 1200,
            itemsToShow: 4
        },
        {
            width: 1500,
            itemsToShow: 4
        }
    ];
    return (
        <div className="client p-sm-5 p-lg-0 text-center text-sm-start w-100"style={{background : '#fff', minHeight : '400px'}}>
            <div className="container my-container">
                <div className="row text-center">
                    <h1 className="fs-1 fw-bold lh-base pt-4" style={{color : '#797979'}}>Satisfied <span style={{color : '#ED7117'}}>Client Base</span></h1>
                    <div className="line"></div>
                </div>
                <div>
                    <Carousel className="my-5" breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
                       <img src="img/testa.png" style={{maxWidth:'300px'}} alt=""/>
                       <img src="img/catl.png" style={{maxWidth:'300px'}} alt=""/>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Clients;

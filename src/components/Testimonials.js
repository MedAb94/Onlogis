import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Testimonials.css';
import Box from './Box';

function Testimonials() {
    const breakPoints = [
        {
            width: 500,
            itemsToShow: 1
        },
        {
            width: 768,
            itemsToShow: 1
        },
        {
            width: 1200,
            itemsToShow: 2
        },
        {
            width: 1500,
            itemsToShow: 2
        }
    ];

    return (
        <div className="test p-sm-5 p-lg-0 text-center text-sm-start w-100" style={{ background: '#F7F7F7', height: '650px' }}>
            <div className="container my-container">
                <div className="row text-center">
                    <h1 className="fs-1 fw-bold lh-base pt-4" style={{ color: '#797979' }}>Customers <span style={{ color: '#ED7117' }}>Testimonials</span></h1>
                    <div className="line"></div>
                </div>
                <div className="carousel-mobile">
                    <Carousel className="my-4" breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
                        <Box img="img/catl.png" name="Ali Djima - CatLogistics" text="We have been using Onlogis ERP for three years and thanks to its functionality, we have gained complete control and clear visibility of the internal and external management of our freight logistics and have created significant value for our customers." />
                        <Box img="img/testa.png" name="Haiba Sidahmed - Alpha services" text="We have been using Onlogis ERP since two years and we are fully satisfied with the level of service, support, features of the ERP and the customization level. We find the team of Onlogis very pragmatic and easy to work with, they understand their product and they are proactive for our needs and concerns"
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;

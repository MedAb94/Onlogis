import React from 'react';

function Box({ img, text, name }) {
    return (
        <div className="p-sm-1 w-100 mx-sm-5">
            <div className="box px-sm-4 pb-sm-4 mt-5">
                <img src={img} className="img-fluid" alt="Logo" />
                <p className="fs-6 fw-normal lh-base mb-auto" style={{color : '#797979'}}>
                    {text}
                </p>
                <h5 className="client-name my-3" style={{color : "#ED7117"}}>{name}</h5>
            </div>
        </div>
    )
}

export default Box;

import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {

    return (
        <div id='home' className='row container py-5 banner g-4'>
            <div className='col-sm-12 col-md-6 left'>
                <h4 className='rounded w-50 ps-3 py-2 text-white'>Prof. Dr. Md. Abdullah</h4>
                <h1 className='fw-bold'>Protect Your Health and<br/>Take Care to Of Your<br/>Health</h1>
                <Button variant="success" className='border-0 mt-5 px-5 py-3 left-btn'>Success</Button>{' '}
            </div>
            <div className='col-sm-12 col-md-6 right'>
                <img className='ms-3' src="https://i.ibb.co/y5M2GJN/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
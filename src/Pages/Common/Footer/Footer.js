import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer mt-5 mb-2 d-flex align-items-center justify-content-center'>
            <small>Abdullah's Chamber || Copyright © {year}</small>
        </div>
    );
};

export default Footer;
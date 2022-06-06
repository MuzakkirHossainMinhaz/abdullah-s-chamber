import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const {id} = useParams();

    return (
        <div className='my-5'>
            <h1 className='text-center fs-1 fw-5 my-5'>CHECTOUT PAGE</h1>
        </div>
    );
};

export default Checkout;
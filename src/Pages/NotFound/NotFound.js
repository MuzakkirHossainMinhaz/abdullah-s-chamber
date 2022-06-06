import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center mt-5 fw-bold text-danger fs-1'>404</h1>
            <div className='d-flex justify-content-center mt-3 mb-5'>
                <img className='' src="https://i.ibb.co/hf2q9ys/error.gif" alt="" />
            </div>
            <h1 className='text-center'>Not Found</h1>
        </div>
    );
};

export default NotFound;
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

const Contact = () => {

    let email, message;
    const handleSubmit = (event) => {
        event.preventDefault();
        message = event.target.message.value;
        email = event.target.email.value;
    };

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleContact = async () => {
        if (email && message) {
            toast('Accept your message');
        }
        else {
            toast('Please provide your email and message');
        }
    }

    return (
        <div id='contact' className='container mx-auto contact-parent'>
            <h1 className='text-center fw-bold'>Contact</h1>
            <div className='contact p-4 my-5 shadow bg-white'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='field' type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='field' type="email" name='email' placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='field' type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            className='field'
                            name='message'
                            as="textarea"
                            placeholder="Type message"
                            style={{ height: '150px' }}
                        />
                    </Form.Group>

                    <Button
                        onClick={handleContact}
                        variant="primary"
                        type="submit"
                        className='my-4 px-5 field'
                    > Submit </Button>
                </Form>

                <div className='contact-img'>
                    <img className='w-75' src="https://i.ibb.co/27MTrdt/contact.png" alt="" />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
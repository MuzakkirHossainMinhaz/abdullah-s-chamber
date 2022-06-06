import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <img className='d-block mx-auto rounded-circle mt-5 mb-3 image' src="https://i.ibb.co/j8WdvDV/profile.jpg" alt="" />
            <h3 className='text-center fw-bold mb-5'>Muzakkir Hossain Minhaz</h3>

            <p className='fs-5'>The <b>goal</b> is to become a Professional Web Developer. I'll try to my best effort for that. For this goal I joined <i>Complete Web Development with Jhankar Mahbub</i> course. I will try to maintain my all tasks according to the course. Sometimes I couldn't but after the bad situation I'll try to back the course flow. As the result finally I'll over 10 milestone of the course of 12.</p>
            <p className='fs-5'>Finally, <em>Thank you,</em> brother <b>Jhankar Mahbub</b> and all <b><i>Programming Hero</i></b> team members.</p>
        </div>
    );
};

export default About;
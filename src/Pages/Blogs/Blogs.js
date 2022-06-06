import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='answer-question'>
            <div className='container my-5 '>
                <h1 className='mb-3'>Difference between Authorization and Authentication</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Authentication</th>
                            <th>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Authentication verifies who the user is.</td>
                            <td>Authorization determines what resources a user can access.</td>
                        </tr>
                        <tr>
                            <td>Authentication is the first step of a good identity and access management process.</td>
                            <td>Authorization always takes place after authentication.</td>
                        </tr>
                        <tr>
                            <td>Authentication is visible to and partially changeable by the user.</td>
                            <td>Authorization is not visible to or changeable by the user.</td>
                        </tr>
                        <tr>
                            <td>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</td>
                            <td>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='container my-5 '>
                <h1 className='mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>I'm using firebase because it manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.</p>

                <h4>Some alternatives of Firebase are:</h4>
                <ul>
                    <li>Parse – Open Source Backend Platform.</li>
                    <li>Pubnub – Real-time APIs and Global Messaging.</li>
                    <li>Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects.</li>
                    <li>Appwrite – Open-Source backend for Flutter developers.</li>
                    <li>Heroku – Platform as a service backed by Salesforce.</li>
                    <li>Deployd – Simple core library, with a modular API for your application.</li>
                </ul>
            </div>
            <div className='container my-5 '>
                <h1 className='mb-3'>What other services does firebase provide other than authentication</h1>

                <h4>Other than authentication, the firebase services are:</h4>
                <ul>
                    <li>Realtime database – Data is synced across all clients in realtime and remains available even when an app goes offline.</li>
                    <li>Hosting – Firebase Hosting provides fast hosting for a web app; content is cached into content delivery networks worldwide.</li>
                    <li>Test lab – he application is tested on virtual and physical devices located in Google’s data centers.</li>
                    <li>Notifications – Notifications can be sent with firebase with no additional coding.</li>
                    <li>Heroku – Platform as a service backed by Salesforce.</li>
                    <li>Deployd – Simple core library, with a modular API for your application.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-sec">
            <div>
                <img src="https://images.unsplash.com/photo-1607156231289-2bd990a219fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <h4>ABOUT TRAVION</h4>
                <h1>World Best Travel Agency Company Since 2012.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <button className="btn btn-success">Visit More</button>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-sec">
            <div>
                <img src="https://images.unsplash.com/photo-1607156231289-2bd990a219fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="about-text">
                <h4 className="gap">ABOUT TRAVION</h4>
                <h1 className="gap">World Best Travel Agency Company Since 2012.</h1>
                <p className="gap">Favorable opinions on the city are important because “travels are becoming a very important information source for international travellers for getting travel advice and suggestions.” Moreover, “when reading and sharing one's travel experience through weblogs, this also creates the willingness to travel.</p>
                <button className="btn btn-success">Visit More</button>
            </div>
        </div>
    );
};

export default About;
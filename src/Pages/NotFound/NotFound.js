import React from 'react';
import './NotFound.css';
import image from '../../Images/404.svg';

const NotFound = () => {
    return (
        <div className="text-center p-5 page">
            <img className="svg" src={image} alt="" />
            <h1>Oops! Page does not found</h1>
        </div>
    );
};

export default NotFound;

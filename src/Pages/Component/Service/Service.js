import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="mt-3">{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;

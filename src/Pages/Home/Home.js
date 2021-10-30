import React from 'react';
import './Home.css';
import banner from '../../Images/banner.jpg';

const Home = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" />
            <div className="content">
                <h1>Enjoy Your Vacation with Travion</h1>
                <h4>The world is a book, and those who do not travel read only a page</h4>
                <p>Discover your next great adventure, become an explorer to get started!</p>
            </div>
            <div>
                <h2>Our Services</h2>
                <p>“Adventure is worthwhile”</p>
            </div>
        </div>
    );
};

export default Home;
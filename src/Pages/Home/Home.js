import React from 'react';
import './Home.css';
import banner from '../../Images/banner.jpg';
import Services from '../Component/Services/Services';
import Guides from '../Component/Guides/Guides';
import About from '../Component/About/About';

const Home = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" />
            <div className="content">
                <h1>Enjoy Your Vacation With <span>Travion</span></h1>
                <h4>The world is a book, and those who do not travel read only a page</h4>
                <div>
                    <div class="input-group tab">
                        <input type="text" class="form-control" placeholder="Search your destination" aria-label="Search your destination" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-success" type="button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <About></About>
            </div>
            <div className="section-service">
                <Services></Services>
            </div>
            <div>
                <Guides></Guides>
            </div>
        </div>
    );
};

export default Home;
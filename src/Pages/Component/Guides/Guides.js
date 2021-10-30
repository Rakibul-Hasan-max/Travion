import React from 'react';
import './Guides.css';
import image from '../../../Images/guides.jpeg';

const Guides = () => {
    return (
        <div>
            <div>
                <h2>Meet The Guides</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim</p>
            </div>
            <div className="guides-man">
                <img src="https://s3.envato.com/files/323368414/envato11196.jpg" alt="" />
                <img src={image} alt="" />
                <img src="https://previews.123rf.com/images/sonjachnyj/sonjachnyj1804/sonjachnyj180401614/101513514-stylish-traveler-man-in-hat-with-backpack-holding-cup-of-tea-in-mountains-with-clouds-space-for-text.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Yg25fyBiTz0mmFXsEIv1J4VFzIks1TGzFw&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default Guides;
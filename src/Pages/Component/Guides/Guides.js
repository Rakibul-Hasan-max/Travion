import React from 'react';
import './Guides.css';
import image from '../../../Images/guides.jpeg';

const Guides = () => {
    return (
        <div className="ground">
            <div>
                <h2 className="text-primary">Meet The Guides</h2>
                <p className="text-success">Professional guides and incredible people, they turn good trips into great ones!</p>
            </div>
            <div className="guides-man">
                <div class="part">
                    <div class="hexa">
                        <div class="hex1">
                            <div class="hex2">
                            <img src="https://s3.envato.com/files/323368414/envato11196.jpg" alt="" width="320" height="313" />
                            </div>
                        </div>
                    </div>
                    <h4>Lyuba Kutin</h4>
                </div>
                <div class="part">
                    <div class="hexa">
                        <div class="hex1">
                            <div class="hex2">
                            <img src="https://previews.123rf.com/images/sonjachnyj/sonjachnyj1804/sonjachnyj180401614/101513514-stylish-traveler-man-in-hat-with-backpack-holding-cup-of-tea-in-mountains-with-clouds-space-for-text.jpg" alt="" width="320" height="313" />
                            </div>
                        </div>
                    </div>
                    <h4>John Titor</h4>
                </div>
                <div class="part">
                    <div class="hexa">
                        <div class="hex1">
                            <div class="hex2">
                            <img src={image} alt="" width="320" height="313" />
                            </div>
                        </div>
                    </div>
                    <h4>Emma Stone</h4>
                </div>
                <div class="part">
                    <div class="hexa">
                        <div class="hex1">
                            <div class="hex2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Yg25fyBiTz0mmFXsEIv1J4VFzIks1TGzFw&usqp=CAU" alt="" width="320" height="313" />
                            </div>
                        </div>
                    </div>
                    <h4>Joshua Dallas</h4>
                </div>
            </div>
        </div>
    );
};

export default Guides;
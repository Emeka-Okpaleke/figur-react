import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import group1622 from "../assets/image/Group 1622.png";
import stores from "../assets/image/Frame12037.png";

const Section7 = () => {
    return (
        <div className="seventh container" style={{paddingTop: '80px'}}>
            <div className="seventh-grid">
                <div className="d1">
                    <img src={group1622} alt="" />
                    <p>You can feel confident that you're always in control of your money.</p>
                    <img src={stores} alt="" style={{ width: '200px', height: 'auto' }} />
                </div>
                <div className="d2">
                    <h3>Figur</h3>
                    <ul style={{ paddingLeft: "0px" }}>
                        <li>Individual</li>
                        <li>Businesses</li>
                        <li>Vaults</li>
                    </ul>
                </div>
                <div className="d3">
                    <h3>Legal</h3>
                    <ul style={{ paddingLeft: "0px" }}>
                        <li>Private Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Faqs</li>
                    </ul>
                </div>
                <div className="d4">
                    <h3>Contact Us</h3>
                    <p>Join our community and be the first to know new features and updates</p>
                    <p>support@figur.africa</p>
                    <div className="social-media">
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#63748a', fontSize: '1.5em' }} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#63748a', fontSize: '1.5em' }} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#63748a', fontSize: '1.5em' }} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#63748a', fontSize: '1.5em' }} />
                        </li>
                </div>
                </div>
            </div>
            <div className=' last-section container'>
                <hr className='head-line'/>
                <p class="t">
                2024 Figur Partners Limited RC 1956603. All rights reserved
                </p>
                <p>
                    Figur is a financial technology company - it is not a bank and does
                    not hold or claim to hold a banking license. The banking
                    services/<br />financial services offered on the Figur platform are
                    provided by CBN-licensed banks and financial institutions
                </p>
                <p>
                    All trademarks and brand names belong to their respective owners.
                    Use of these trademarks and brand names do not represent
                    <br />endorsement by or association with Vella Technologies
                    Inc.Google Play and the Google Play logo are registered trademarks
                    of Google <br />
                    LLC. Apple, the Apple logo, and iPhone are registered trademarks of
                    Apple Inc.
                </p>
            </div>
           
        </div>
        
    );
}

export default Section7;

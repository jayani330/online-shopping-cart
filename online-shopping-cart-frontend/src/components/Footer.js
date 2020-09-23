import React, {Component} from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'
import Logo from './svg/logo3.svg'
import Facebook from './svg/facebook.svg'
import Instagram from './svg/instagram.svg'
import Twitter from './svg/twitter.svg'
import LinkedIn from './svg/linkedin.svg'


export class Footer extends Component{
    render(){
        return (
            <div className="footer-wrapper">
            <div className="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Join the newsletter to recieve our best deals!
                    </p>
    
                    <p className="footer-subscription-text">
                        You can unsubscribe at anytime.
                    </p>
    
                    <div className="input-areas">
                        <form id="inFooter">
                            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                            <button id="btn">Subscribe</button>
                        </form>
                    </div>
    
                </section>
    
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <Link>How it works</Link>
                            <Link>Carrers</Link>
                            <Link>Investors</Link>
                            <Link>Terms of Services</Link>
                        </div>
    
                        <div className="footer-link-items">
                            <h2>Contact Us</h2>
                            <Link>Contact</Link>
                            <Link>Support</Link>
                            <Link>Sponserships</Link>
                        </div>
    
                        <div className="footer-link-items">
                            <h2>Social Media</h2>
                            <Link>Facebook</Link>
                            <Link>Instagram</Link>
                            <Link>Twitter</Link>
                            <Link>LinkedIn</Link>
                        </div>
                        
                    </div>
                </div>
    
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to={'/product'}>
                                <img src={Logo} alt="" width="100px" />
                            </Link>
                        </div>
    
                        <small className="website-rights">Watchie @ 2020</small>
    
                        <div className="social-icons">
                            <Link className="facebook-icon" to="" target="_blank" aria-label="Facebook">
                                <img src={Facebook} alt="" width="10px" />
                            </Link>
    
                            <Link className="instagram-icon" to="" target="_blank" aria-label="Instagram">
                                <img src={Instagram} alt="" width="20px" />
                            </Link>
    
                            <Link className="twitter-icon" to="" target="_blank" aria-label="Twitter">
                                <img src={Twitter} alt="" width="20px" />
                            </Link>
    
                            <Link className="linkedin-icon" to="" target="_blank" aria-label="LinkedIn">
                                <img src={LinkedIn} alt="" width="20px" />
                            </Link>
                        </div>
    
                    </div>
    
                </section>
    
            </div>
            </div>
        );
    }
}

/*
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to recieve our best deals!
                </p>

                <p className="footer-subscription-text">
                    You can unsubscribe at anytime.
                </p>

                <div className="input-areas">
                    <form id="inFooter">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <button id="btn">Subscribe</button>
                    </form>
                </div>

            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link>How it works</Link>
                        <Link>Carrers</Link>
                        <Link>Investors</Link>
                        <Link>Terms of Services</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link>Contact</Link>
                        <Link>Support</Link>
                        <Link>Sponserships</Link>
                    </div>

                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link>Facebook</Link>
                        <Link>Instagram</Link>
                        <Link>Twitter</Link>
                        <Link>LinkedIn</Link>
                    </div>
                    
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to={'/product'}>
                            <img src={Logo} alt="" width="100px" />
                        </Link>
                    </div>

                    <small className="website-rights">Watchie @ 2020</small>

                    <div className="social-icons">
                        <Link className="facebook-icon" to="" target="_blank" aria-label="Facebook">
                            <img src={Facebook} alt="" width="10px" />
                        </Link>

                        <Link className="instagram-icon" to="" target="_blank" aria-label="Instagram">
                            <img src={Instagram} alt="" width="20px" />
                        </Link>

                        <Link className="twitter-icon" to="" target="_blank" aria-label="Twitter">
                            <img src={Twitter} alt="" width="20px" />
                        </Link>

                        <Link className="linkedin-icon" to="" target="_blank" aria-label="LinkedIn">
                            <img src={LinkedIn} alt="" width="20px" />
                        </Link>
                    </div>

                </div>

            </section>

        </div>
    )
}
*/

export default Footer
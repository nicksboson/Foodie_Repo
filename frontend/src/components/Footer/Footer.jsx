import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'> 
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.foodie_icon} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, sapiente. Libero esse aperiam voluptatum placeat culpa iure vero? Odio itaque accusantium amet animi possimus adipisci id saepe corporis inventore consequatur.</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> 
                        <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="Twitter" /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="LinkedIn" /></a>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-214-723-889</li>
                    <li>Contact@foodie.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &nbsp;  &copy; &nbsp; foodie.com - All Right Reserved</p>
    </div>
  )
}

export default Footer

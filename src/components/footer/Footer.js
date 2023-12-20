import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import ppd_logo from "../../images/ppd_logo.png";
import iitmlogo from "../../images/iitmlogo.png";
import "./Footer.css";



const Footer = () => {
    const year = new Date().getFullYear();


    return (
        <div className="sixth-section">
            <div className='last-footer'>
                <div className="footer1" id="foot1">
                    <img src={ppd_logo} alt="" class="" />
                    <p class="">
                        <b>Personal & Professional Development, IIT Madras</b> <br />
                        Connect with us:<Link to="https://www.linkedin.com/in/aman-singh-718493224/" target="_blank" rel="noopener noreferrer" className='linkedin-link'><FaLinkedin /> LinkedIn</Link>
                    </p>
                </div>
                <div className="footer2" id="foot2">
                    <ul className="nav-menu">
                        <NavLink to='/' className='customlink'><li>HOME</li></NavLink>
                        <NavLink to='/personal' className='customlink'><li>PERSONAL DEVELOPMENT</li></NavLink>
                        <NavLink to='/professional' className='customlink'><li>PROFESSIONAL DEVELOPMENT</li></NavLink>
                        <NavLink to='/blog' className='customlink'><li>BLOG</li></NavLink>
                        <NavLink to='/media' className='customlink'><li>MEDIA</li></NavLink>
                        <NavLink to='/about' className='customlink'><li>ABOUT US</li></NavLink>
                    </ul>
                </div>
                <div className="footer3" id="foot3">
                    <p class="">
                        <b>Indian Institute of Technology Madras</b> <br />
                        Chennai, Tamil Nadu-600036<br />
                        Website: <Link to="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" className='iitm-link'>www.iitm.ac.in</Link>
                    </p>
                    <img src={iitmlogo} alt="" class="" />
                </div>
            </div>
            <hr className='style-two'/>
            <div className='creator-info'>
            © {year}, For any queries regarding this site, contact:<br/><b>Aman Singh</b> | <b>amankrj12345@gmail.com</b> | <b>+91 8868857492</b> 
            </div>
        </div>
    )
}

export default Footer
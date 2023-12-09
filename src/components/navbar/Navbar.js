import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import ppd_logo from "../../images/ppd_logo.png";
import iitmlogo from "../../images/iitmlogo.png";
import "./Navbar.css";
// import Homepage from '../../components/homepage/Homepage';
// import About from '../../components/about-us/About';
// import Personal from '../../components/personal-dev/Personal';
// import Professional from '../../components/professional-dev/Professional';
// import Blog from '../../components/blog/Blog';
// import Media from '../../components/media/Media';


const Navbar = () => {

  const [divVisible, setDivVisible] = useState(false);

  const toggleVisibility = () => {
    setDivVisible(!divVisible);
  };


  return (
    <div className='nav' >
      <div className="">
        <img src={ppd_logo} alt="" className="logo" />
      </div>
      <div className="main-nav-list" onClick={toggleVisibility}>
          <div className="hamburger-nav" >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul className={`content nav-links ${divVisible ? 'visible' : 'hidden'}`}>
            <NavLink to='/' className='customlink'><li><div className='div-of-navlink'>HOME</div></li></NavLink>
            <NavLink to='/personal' className='customlink'><li><div className='div-of-navlink'>PERSONAL DEVELOPMENT</div></li></NavLink>
            <NavLink to='/professional' className='customlink'><li><div className='div-of-navlink'>PROFESSIONAL DEVELOPMENT</div></li></NavLink>
            <NavLink to='/blog' className='customlink'><li><div className='div-of-navlink'>BLOG</div></li></NavLink>
            <NavLink to='/media' className='customlink'><li><div className='div-of-navlink'>MEDIA</div></li></NavLink>
            <NavLink to='/about' className='customlink'><li><div className='div-of-navlink'>ABOUT US</div></li></NavLink>
          </ul>
      </div>
      <div class="">
        <img src={iitmlogo} alt="" className="logo" />
      </div>
    </div>
  )
}

export default Navbar
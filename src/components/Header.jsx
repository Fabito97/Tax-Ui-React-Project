import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png"
import './Header.css'
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const iconRef = useRef(null);
  const location = useLocation();

  const handleNavLinks = () => {
  setIsOpen(!isOpen);
  }

  const handleScroll = () => {
     setIsOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && 
        !navRef.current.contains(e.target) && 
        iconRef.current &&
        !buttonRef.current.contains(e.target          
        )) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location])

  return (
    <div className='header'>
      <div className='container'>
      <div className="main-nav">
       
        <Link className='logo-wrapper' to='/'>
          <img className="logo" src={Logo} alt='' />
          <h3>Tax<span>Pal</span></h3>
        </Link> 
        
        { <ul ref={navRef} className={`nav-links ${isOpen ? "show": "none"}`}>
          <li><Link className="nav-link" to='feature'>Features</Link></li>          
          <li><Link className="nav-link" to='testimonial'>Testimonial</Link></li>
          <li><Link className="nav-link" to='pricing'>Pricing</Link></li>
          <li><Link className="nav-link" to='#'>Sign in</Link></li>
        </ul>}

      </div>
        <div className='btn-link'>
          <Link className="sign" to='#'>Sign in</Link>
          <button>Get started today</button>
        </div>
          <div className="btn-mobile">
            <button>Get started </button>
            <i ref={iconRef} className='bx bx-menu menu-icon' onClick={handleNavLinks}></i>
          </div>
      </div>
    </div>
  );
};

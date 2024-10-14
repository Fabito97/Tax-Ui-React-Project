import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
      <div className="nav-contents">
       
       <Link className='logo-wrapper' to='/'>
         <img className="logo" src={Logo} alt='' />
         <h3>Tax<span>Pal</span></h3>
       </Link> 
       
       <ul className='footer-nav-links'>
         <li><Link to='feature'>Features</Link></li>         
         <li><Link to='testimonial'>Testimonial</Link></li>
         <li><Link to='pricing'>Pricing</Link></li>
       </ul>
     </div>
        <div className='footer-contents'>
          <p>Copyright &copy; 2024 Taxpal. All rights reserved</p>
          <div className='socials'>
            <a href="http://github.com"><i className="fa-brands fa-twitter"></i></a>
            <a href="http://twitter.com"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

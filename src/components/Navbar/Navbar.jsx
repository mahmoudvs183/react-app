import "./Navbar.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone,faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <div className="logo-icon"></div>
          <div className="logo-text">Company Logo</div>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">contact</a>
          <div className="tel">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+493012345678">+49 301-2345678</a>
          </div>
          <div className="nav-buttom">
            <Button buttonText="Get a Quote!" />
          
          </div>
        </div>
        <div className="bar-links">
        <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="dropdown-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">contact</a></li>
          <li><a href="" className="bar-button">Get a Quote!</a></li>
        </div>
        
       
       
      </nav>
    </>
  );
}

export default Navbar;

import styles from "./Landing.css";
import Button from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Landing() {
  const ButtonOne = {
    color: "#fe7d18",
    border: "2px solid #fe7d18",
    
  };
  const ButtonTwo = {
    backgroundColor: "#00e632",
    color: "white",
    border: "2px solid #00e632",
    marginLeft : "15px",
  };
  return (
    <div className="landing">
      <div className="landing-text">
        <h1>Let us make your Events Shine! </h1>
        
        <p>
          "turning your vision into a memorable experience every event ,every
          time"
        </p>
      </div>
      <div className="landing-buttoms ">
        <Button style={ButtonOne} buttonText="Get a Quote!" />
        <Button style={ButtonTwo} buttonText="Get Started" />
      </div>
      <div className="social">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </div>
  );
}

export default Landing;

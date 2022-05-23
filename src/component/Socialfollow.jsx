import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import "./social.css"
  import React from 'react'
  
  const Socialfollow = () => {
      return (
          <div className="social-container"
          id="Contact Me" 
          >
                
                <a href="https://www.facebook.com/omer.mamoro/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/omerkamalmamoro" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/omer_mamoro/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
          </div>
      )
  }
  
  export default Socialfollow
  
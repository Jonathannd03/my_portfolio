import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/jonathan-ndinga-a513a01a2/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <BsTwitter />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
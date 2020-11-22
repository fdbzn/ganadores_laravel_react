import React from 'react';
import extras from '../images/extra-productos.png';
import whatsBtn from '../images/whats.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" >
          <a href="https://wa.me/525536974488" target="_blank">
            <img
              src={whatsBtn}
              alt="whatsBtn"
              className="whatsBtn"
            />
          </a>
          <img
            src={extras}
            alt="extras"
            className="extras"
          />
      </div>
    );
  }
}

export default Footer;

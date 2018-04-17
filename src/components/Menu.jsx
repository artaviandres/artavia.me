import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter-square';
import FaLinkedin from 'react-icons/lib/fa/linkedin-square';
import FaMail from 'react-icons/lib/fa/envelope';
import FaBars from 'react-icons/lib/fa/bars';
import MdClose from 'react-icons/lib/md/close';
import './Menu.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
    };
  }

  render() {
    return (
      <div style={{ height: 100 + '%', width: 100 + '%' }}>
        <div className="menu__desktop">
          <h1>AndrésArtavia</h1>
          <h2>&lt;software engineer /&gt;</h2>
          <hr />
          {/* actual menu */}
          <footer>
            <a href="https://facebook.com/iAndrezx" target="_blank">
              <FaFacebook color="white" size="28px" />
            </a>
            <a href="https://instagram.com/artaviandres" target="_blank" className="margin">
              <FaInstagram color="white" size="28px" />
            </a>
            <a href="https://twitter.com/Artvavia" target="_blank" className="margin">
              <FaTwitter color="white" size="28px" />
            </a>
            <a href="https://www.linkedin.com/in/artaviandres/" target="_blank" className="margin">
              <FaLinkedin color="white" size="28px" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=artaviandres@gmail.com" target="_blank" className="margin">
              <FaMail color="white" size="25px" />
            </a>
          </footer>
        </div>
        <div className="menu__mobile" style={this.state.toggleMenu === true ? { position: 'absolute', left: -50 + '%'  } : null}>
          <h1>AndrésArtavia</h1>
          <a className="toggle" onClick={() => this.setState({ toggleMenu: !this.state.toggleMenu })}>
            {this.state.toggleMenu === true ? <MdClose size={28} />  : <FaBars size={28} />}
          </a>
        </div>
        {this.state.toggleMenu === true
          ? <div className="menu__wrapper">
              
            </div>
          : null
        }
      </div>
    );
  }
}
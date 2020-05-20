import React, { Component } from 'react';
import image from '../Assets/profile2.png';
import { Link } from 'react-scroll';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <Link className="navbar-brand js-scroll-trigger" to="about" smooth duration={1000}>
          <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
          <span className="d-none d-lg-block">

            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="about" smooth duration={1000}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="experience" smooth duration={1000}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="education" smooth duration={1000}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="skills" smooth duration={1000}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="projects" smooth duration={1000} >Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
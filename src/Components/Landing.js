
import React, { Component } from '../../node_modules/react';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import ReactTypingEffect from 'react-typing-effect';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Resume from '../Assets/resume.pdf';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0 text-primary">
            <ReactTypingEffect
              className="typingeffect"
              text={['John Ogundeji', 'Software developer', 'Student', 'Sports Fan', 'Film Buff', 'Foodie', 'Lifelong Learner']}
              speed={200}
              eraseDelay={500}
              typingDelay={2000}
            />
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber} ·
            <a href={`mailto:${this.landingData.email}`}>{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={`mailto:${this.landingData.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            { /* eslint-disable-next-line */}
            <a href={Resume} target="_blank">
              <FontAwesomeIcon icon={faFileAlt} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
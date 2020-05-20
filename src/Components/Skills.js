import React, { Component } from '../../node_modules/react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faCheckCircle } from "../../node_modules/@fortawesome/free-solid-svg-icons";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <div className="row">
            {
              this.skills.map((data, index) => (
                <div key={index} className="col-6">
                  <p className="list-item">
                    <FontAwesomeIcon icon={faCheckCircle} color="green" />
                    <span className="ml-3">{data.name}</span>
                    <ProgressBar striped variant="info" now={data.level} />
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

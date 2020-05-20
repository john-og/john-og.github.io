
import React, { Component } from '../../node_modules/react';
import Card from 'react-bootstrap/Card'
import Pelmorex from '../Assets/Pelmorex.png'
import Cannect from "../Assets/Cannect.png"
import Stem from "../Assets/Stem.png"
import Evertz from "../Assets/Evertz.png"

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  renderSwitch(param) {
    switch (param) {
      case 0:
        return <img src={Pelmorex} alt="Logo" />;
      case 1:
        return <img src={Cannect} className="pad" alt="Logo" />;
      case 2:
        return <img src={Stem} className="pad" alt="Logo" />;
      case 3:
        return <img src={Evertz} className="pad" alt="Logo" />;
      default:
        return 'logo';
    }
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {
            this.experience.map((exp, index) => (
              <Card style={{ margin: '1em' }}>
                <Card.Body>
                  <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                      <h3 className="mb-0">{exp.position}</h3>
                      <div className="subheading mb-3">{exp.organization}</div>
                      <p>{exp.aboutWork}</p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary pad">{exp.fromDate} - {exp.toDate}</span>
                      <div>
                        {this.renderSwitch(index)}
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Experience;
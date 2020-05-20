import React, { Component } from '../../node_modules/react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faGithub, } from "../../node_modules/@fortawesome/free-brands-svg-icons";
import Twitterbot from "../Assets/Twitterbot.png";
import Ebay from "../Assets/Ebay.png";

class Projects extends Component {
    constructor(props) {
        super(props);

        this.projects = props.projects;
    }

    renderSwitch(param) {
        switch (param) {
            case 0:
                return Ebay;
            case 1:
                return Twitterbot;
            default:
                return 'logo';
        }
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>
                    <div class="row">
                        {
                            this.projects.map((proj, index) => (
                                <Card border="secondary" style={{ width: '16rem', margin: '1em' }}>
                                    <Card.Img variant="top" src={this.renderSwitch(index)} />
                                    <Card.Body>
                                        <Card.Title>{proj.name}</Card.Title>
                                        <Card.Text>{proj.description}</Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className="font-weight-bold">{proj.tools}</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Footer>
                                        <a href={proj.github}>
                                            <FontAwesomeIcon icon={faGithub} size='2x' />
                                        </a>
                                    </Card.Footer>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
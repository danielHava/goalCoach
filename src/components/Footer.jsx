import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
        <section id="footer">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" className="mt-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item">
                                <a href="/">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="white" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="white" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="white" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/">
                                    <FontAwesomeIcon icon={['fab', 'google-plus']} size="2x" color="white" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="envelope" size="2x" color="white" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>	
                <Row>
                    <Col xs="12" sm="12" md="12" className="mt-2 text-center text-white">
                        <hr/>
                        <p>© 2019, Coded by&nbsp; 
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                Daniel Hava
                            </a>
                            . Made with <FontAwesomeIcon icon="heart" size="sm" color="#d81b60" /> for a better web.
                        </p>
                    </Col>
                </Row>	
            </Container>
        </section>
    );
  }
}
  
export default Footer;

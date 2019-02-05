import React, { Component } from 'react';
import {
    Container,
	Row,
    Col,
    Button
} from 'reactstrap';

class NotFound extends Component {
    render(){
        const wrapper_styles = {
            textAlign: 'center',
            paddingTop: 110,
        }; 
        const heading_styles = {
            fontSize: 200,
            fontWeight: 'bold',
            marginBottom: 0
        }; 
        const hr_styles = {
            maxWidth: 500,
            margin: '0 auto 55px auto', 
            border: 0,
            height: 1,
            background: '#333',
            backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)'
        }; 
        const text_styles = {
            marginBottom: 80,
            maxWidth: 500,
            margin: '0 auto 70px auto',
            padding: 0
        }; 
        const button_styles = {
            marginBottom: 96,
            borderRadius: 25,
            backgroundColor: '#212529;',
            color: '#fff',
            border: '2px solid #212529;',
            fontSize: 14,
            padding: '0 37px',
            transition: 'all 0.3s ease-in-out',
            lineHeight: '46px'
        }; 

        return(
            <Container>
                <Row>
                    <Col>
                        <div style={wrapper_styles}>
                            <h3 style={heading_styles}>404</h3>
                            <hr style={hr_styles} />
                            <p style={text_styles}>We are sorry but the page you are looking for does not exist. Please try searching again or click on the button below to continue exploring website.</p>
                            <Button style={button_styles}>
                                BACK TO HOMEPAGE
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotFound;
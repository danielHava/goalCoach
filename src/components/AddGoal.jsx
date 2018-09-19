import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { goalRef } from '../firebase'
import { connect } from 'react-redux';

class AddGoal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    addGoal(){
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({email, title});
    }
    render() {
        return (
            <Row
                className="mt-3 mb-3"
            >
                <Col sm={4}>
                    <h4>
                        Add a new goal
                    </h4>
                </Col>
                <Col sm={8}>
                    <Form inline>
                        <FormGroup className="mr-2">
                            <Input 
                                type="text" 
                                name="goal" 
                                placeholder="Enter your goal"
                                onChange={event => this.setState({title: event.target.value})}
                            />
                        </FormGroup>
                        <Button
                            onClick={()=>this.addGoal()}
                        >
                            Add Goal
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddGoal);
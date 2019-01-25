import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

const Title = props => {
    return(
        <h2>Welcome back, {props.name}!</h2>
    );
}

class TaskManager extends Component {
    render() {
        return (
            <Container className="mt-3">
                <Row className="mt-5 mb-5">
                    <Col>
                        <Title name="Dani" />
                    </Col>
                </Row>
                <AddGoal />
                <GoalList />
                <CompleteGoalList />
            </Container>
        );
    }
}

function mapStateToProps(state){
    // console.log('state', state);
    return {};
}

export default connect(mapStateToProps, null)(TaskManager);
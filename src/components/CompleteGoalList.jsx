import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Button,
} from 'reactstrap';
import { completeGoalRef } from '../firebase'
import { connect } from 'react-redux';
import { setCompleteGoals } from '../actions';

class CompleteGoalList extends Component {
    componentDidMount(){
        completeGoalRef.on('value', snap =>{
            let completeGoals = [];
            snap.forEach(completeGoal =>{
                const {email, title} = completeGoal.val();
                const serverKey = completeGoal.key;
                completeGoals.push({email, title, serverKey});
            })
            this.props.setCompleteGoals(completeGoals);
        })
    }
    clearCompleted(){
        completeGoalRef.set([]);
    }
    render() {
        return (
            <div>
                <Row
                    className="mt-5 mb-3"
                >
                    <Col sm={8}>
                        <h4>
                            Complete Goal List
                        </h4>
                    </Col>
                    <Col sm={4}>
                        <Button 
                         color="primary"
                         size="sm"
                         onClick={() => this.clearCompleted()}
                        >
                            Clear Completed Goals
                        </Button>
                    </Col>
                </Row>
                <Row
                    className="mt-5 mb-3"
                >
                    <Col sm={12}>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Goal</th>
                                <th>Completed by</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.completeGoals.map((goal, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index}</th>
                                                <td>{goal.title}</td>
                                                <td>{goal.email}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { completeGoals } = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, { setCompleteGoals })(CompleteGoalList);
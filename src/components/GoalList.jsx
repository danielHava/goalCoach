import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
} from 'reactstrap';
import { goalRef } from '../firebase'
import { connect } from 'react-redux';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
    componentDidMount(){
        goalRef.on('value', snap =>{
            let goals = [];
            snap.forEach(goal =>{
                const {email, title} = goal.val();
                const serverKey = goal.key;
                goals.push({email, title, serverKey});
            })
            this.props.setGoals(goals);
        })
    }
    render() {
        return (
            <Row
                className="mt-5 mb-3"
            >
                <Col sm={12}>
                    <h4>
                        Goal List
                    </h4>
                </Col>
                <Col sm={12}>
                    <Table hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Goal</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.goals.map((goal, index) => {
                                    return (
                                        <GoalItem 
                                            index={index}
                                            key={index}
                                            goal={goal}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state){
    const { goals } = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
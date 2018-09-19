import React, { Component } from 'react';
import {
  Button,
} from 'reactstrap';
import { goalRef, completeGoalRef } from '../firebase'
import { connect } from 'react-redux';

class GoalItem extends Component {
    completeGoal() {
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        completeGoalRef.push({email, title});
        goalRef.child(serverKey).remove();
    }
    render() {
        const {email, title} = this.props.goal
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>{title}</td>
                <td>{email}</td>
                <td>
                    <Button 
                        color="primary"
                        size="sm"
                        onClick={() => this.completeGoal()}
                    >
                        Complete
                    </Button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserBtn extends Component {
    render() {
        const user_path = this.props.user === 'parent-caregiver' ? '/feeling-selection' : 'child-feeling-selection';

        return (
            <Link to={user_path}>
                <div className="user-btn select-btn">
                    {this.props.user}
                </div>
            </Link>
        )
    }
}

export default UserBtn;
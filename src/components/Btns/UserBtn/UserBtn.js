import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Btns.css';
import './UserBtn.css';

class UserBtn extends Component {
    render() {
        const user_path = this.props.user === 'parent/caregiver' ? '/feeling-selection' : 'child-feeling-selection';

        return (
            <Link to={user_path} className='btn-link'>
                <div className="user-btn" >
                    {this.props.user}
                </div>
            </Link>
        )
    }
}

export default UserBtn;
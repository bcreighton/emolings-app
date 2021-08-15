import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmolingsContext from '../../../context/EmolingContext';
import '../Btns.css';
import './UserBtn.css';

class UserBtn extends Component {
    static contextType = EmolingsContext;

    handleClick = () => {
        const user_type_id = this.props.user === 'parent/caregiver' ? 1 : 2;
        this.context.getUserType(user_type_id)
    }

    render() {
        const user_path = this.context.user_type.userType === 'parent-caregiver' ? '/feeling-selection' : 'child-feeling-selection';

        return (
            <Link to={user_path} className='btn-link'>
                <div className="user-btn" onClick={this.handleClick}>
                    {this.props.user}
                </div>
            </Link>
        )
    }
}

export default UserBtn;
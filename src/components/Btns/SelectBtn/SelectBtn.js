import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SelectBtn extends Component {
    generateBtnLink = () => {
        if(this.props.severity) return '/coping';
        if(this.props.advFeeling) return '/feeling-severity';
        
        if(this.props.location.pathname === '/child-feeling-selection') {
            return '/child-feeling-severity';
        }
        else {
            return '/adv-feeling-selection';
        }
    }

    render() {
        return (
            <Link className='SelectBtn' to={this.generateBtnLink()} >
                <button>{this.props.feeling || this.props.advFeeling || this.props.severity}</button>
            </Link>
        )
    }
}

export default withRouter(SelectBtn);
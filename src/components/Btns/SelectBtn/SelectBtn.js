import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SelectBtn.css';
import '../Btns.css';

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

    generateClass = () => {
        return ('select-btn ' + this.props.color + '-btn');
    }

    render() {
        return (
            <Link className='btn-link' to={this.generateBtnLink()} >
                <div className={this.generateClass()}>
                    {this.props.feeling || this.props.advFeeling || this.props.severity}
                </div>
            </Link>
        )
    }
}

export default withRouter(SelectBtn);
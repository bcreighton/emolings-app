import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SelectBtn.css';
import '../Btns.css';
import EmolingsContext from '../../../context/EmolingContext';

class SelectBtn extends Component {
    static contextType = EmolingsContext;

    generateBtnLink = () => {
        if(this.props.severity) {
            if (this.props.location.pathname.includes('/child-feeling-severity')) {
                return '/child-coping'
            } else { 
                return '/coping'
            }
        };

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
            <Link className='btn-link' to={`${this.generateBtnLink()}/${this.props.id}`} >
                <div 
                    className={this.generateClass()} 
                >
                    {this.props.feeling || this.props.advFeeling || this.props.severity}
                </div>
            </Link>
        )
    }
}

export default withRouter(SelectBtn);
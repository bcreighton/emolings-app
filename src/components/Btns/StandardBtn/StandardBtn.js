import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StandardBtn extends Component {
    render() {
        return (
            <Link to={this.props.link}><button>{this.props.text}</button></Link>
        )
    }
}

export default StandardBtn;
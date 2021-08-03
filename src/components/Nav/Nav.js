import React, { Component } from 'react';
import Brand from '../Brand/Brand';

class Nav extends Component {
    render() {
        return (
            <div id="navHeader">
                <Brand />
                <ul id="nav">
                    <li className="navItem">FAQ</li>
                    <li className="navItem">Coping Skills</li>
                </ul>
            </div>
            
        )
    }
}

export default Nav;
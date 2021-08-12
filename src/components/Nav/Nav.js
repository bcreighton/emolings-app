import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Brand from '../Brand/Brand';
import './Nav.css';

class Nav extends Component {
    renderNav() {
        if(this.props.location.pathname === '/' || this.props.location.pathname === '/get-started') {
            return (
                <nav>
                    <Brand />
                    <ul id="nav-items">
                        <li className="navItem"><Link to='/faq'>FAQ</Link></li>
                        <li className="navItem"><Link to='/coping-skills'>Coping Skills</Link></li>
                    </ul>
                </nav>
            )
        }

        if(this.props.location.pathname === '/faq') {
            return (
                <nav>
                    <Brand />
                    <ul id="nav-items">
                        <li className="navItem"><Link to='/get-started'>Get Started</Link></li>
                        <li className="navItem"><Link to='/coping-skills'>Coping Skills</Link></li>
                    </ul>
                </nav>
            )
        }

        if(this.props.location.pathname === '/coping-skills') {
            return (
                <nav>
                <Brand />
                <ul id="nav-items">
                    <li className="navItem"><Link to='/get-started'>Get Started</Link></li>
                    <li className="navItem"><Link to='/faq'>FAQ</Link></li>
                </ul>
            </nav>
            )
        }
        else {
            return (
                <nav>
                    <Brand />
                    <ul id="nav-items">
                        <li className="navItem"><Link to='/get-started'>Start Over</Link></li>
                        <li className="navItem"><Link to='/faq'>FAQ</Link></li>
                        <li className="navItem"><Link to='/coping-skills'>Coping Skills</Link></li>
                    </ul>
                </nav>
            )
        }
    }
    render() {
        return (
            <>
                {this.renderNav()}
            </>
        )
    }
}

export default withRouter(Nav);
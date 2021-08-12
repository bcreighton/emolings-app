import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Brand.css';

class Brand extends Component {
    render() {
        return (
            <Link to='/'>
                <div id="brand">
                    <h1 className="logo">
                        <span className='red'>E</span>
                        <span className='yellow'>M</span>
                        <span className='green'>O</span>
                        <span className='blue'>L</span>
                        <span className='purple'>I</span>
                        <span className='red'>N</span>
                        <span className='yellow'>G</span>
                        <span className='green'>S</span>
                    </h1>
                    <p className="tagline">Child Feelings For The Modern Age!</p>
                </div>
            </Link>
        )
    }
}

export default Brand;
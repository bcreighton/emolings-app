import React, { Component } from 'react';
import StandardBtn from '../Btns/StandardBtn/StandardBtn';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <section className="hero landing">
                <h1 className="headline">You're Interactive Feelings Chart!</h1>
                <h3 className="sub-head">Create better conversations and coping skills to working through the multitude of emotions and feelings your child expereiences at all stages of childhood.</h3>
                <StandardBtn link='/get-started' text='Get Started' />
            </section>
        )
    }
}

export default Hero;
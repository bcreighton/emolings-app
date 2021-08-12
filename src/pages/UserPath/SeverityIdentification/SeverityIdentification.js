import React, { Component } from 'react';
import StandardBtn from '../../../components/Btns/StandardBtn/StandardBtn';
import '../UserPath.css';

class SeverityIdentification extends Component {
    render() {
        return (
            <div id="severity-identification">
                <section className="container">
                    <h2 className="headline">Feeling Severity Identification</h2>
                    <p className="support-copy">Use the questions below to open the lines of communication with your child. If they are not speaking; look for none verbial indicators.</p>
                </section>
                <section className="container">
                    <ul className="identification-list">
                        <li className="identification-item main-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam qui nobis quis. Sint, eum?</li>
                        <li className="identification-item main-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam qui nobis quis. Sint, eum?</li>
                        <li className="identification-item main-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam qui nobis quis. Sint, eum?</li>
                        <li className="identification-item main-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam qui nobis quis. Sint, eum?</li>
                        <li className="identification-item main-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam qui nobis quis. Sint, eum?</li>
                    </ul>
                </section>
                <section className="container">
                    <p className="support-copy">Once you identify the severity of the emotion/feeling use the button bellow to return to select a severity option.</p>
                    <StandardBtn link='/feeling-severity' text='Severity Selection' />
                </section>
            </div>
        )
    }
}

export default SeverityIdentification;
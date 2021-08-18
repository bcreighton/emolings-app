import React, { Component } from 'react';
import StandardBtn from '../../../components/Btns/StandardBtn/StandardBtn';
import EmolingsContext from '../../../context/EmolingsContext';
import '../UserPath.css';

class SeverityIdentification extends Component {
    static contextType = EmolingsContext;

    generateSeverityIdentifiersList(severity_identifiers) {
        return severity_identifiers.map(severity_identifier => (
            <li key={severity_identifier.id} className='identification-item main-copy'>
                {severity_identifier.identifier}
            </li>
        ))
    }

    componentDidMount() {
        
    }
    
    render() {
        return (
            <div id="severity-identification">
                <section className="container">
                    <h2 className="headline">Feeling Severity Identification</h2>
                    <p className="support-copy">Use the questions below to open the lines of communication with your child. If they are not speaking; look for none verbial indicators.</p>
                </section>
                <section className="container">
                    <ul className="identification-list">
                    {this.generateSeverityIdentifiersList(this.context.severity_identifiers)}
                    </ul>
                </section>
                <section className="container">
                    <p className="support-copy">Once you identify the severity of the emotion/feeling use the button bellow to return to select a severity option.</p>
                    <StandardBtn link={this.context.track_location} text='Severity Selection' />
                </section>
            </div>
        )
    }
}

export default SeverityIdentification;
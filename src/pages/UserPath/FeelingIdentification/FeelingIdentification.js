import React, { Component } from 'react';
import StandardBtn from '../../../components/Btns/StandardBtn/StandardBtn';
import EmolingsContext from '../../../context/EmolingContext';
import '../UserPath.css';

class FeelingIdentification extends Component {
    static contextType = EmolingsContext;

    generateFeelingIdentifiersList(feeling_identifiers) {
        return feeling_identifiers.map(feeling_identifier => (
            <li key={feeling_identifier.id} className='identification-item main-copy'>
                {feeling_identifier.identifier}
            </li>
        ))
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="feeling-identification">
                <section className="container">
                    <h2 className="headline">Feeling Identification</h2>
                    <p className="support-copy">Use the questions below to open the lines of communication with your child. If they are not speaking; look for none verbial indicators.</p>
                </section>
                <section className="container">
                    <ul className="identification-list">
                        {this.generateFeelingIdentifiersList(this.context.feeling_identifiers)}
                    </ul>
                </section>
                <section className="container">
                    <p className="support-copy">Once you identify the emotion/feeling use the button bellow to return to select a feeling.</p>
                    <StandardBtn link='/feeling-selection' text='Feeling Selection' />
                </section>
            </div>
        )
    }
}

export default FeelingIdentification;
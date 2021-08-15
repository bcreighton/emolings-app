import React, { Component } from 'react';
import EmolingsContext from '../../context/EmolingContext';
import './Faq.css';

class Faq extends Component {
    static contextType = EmolingsContext;

    generateFaqList(faqs) {
        return faqs.map(faq => (
            <li key={faq.id} className="faq-item">{faq.question}
                <ol className="faq-sublist">
                    <li className="faq-subitem">{faq.answer}</li>
                </ol>
            </li>
        ))
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="faq">
                <section className="container">
                    <h2 className="headline">FAQ</h2>
                    <ol id="faq-list">
                    {this.generateFaqList(this.context.faqs)}
                    </ol>
                </section>
            </div>
        )
    }
}

export default Faq;
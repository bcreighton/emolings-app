import React, { Component } from 'react';
import StandardBtn from '../../../components/Btns/StandardBtn/StandardBtn';
import EmolingsContext from '../../../context/EmolingContext';
import './Coping.css';

class Coping extends Component {
    static contextType = EmolingsContext;

    generateChildCopingSkillsList(coping_skills) {
        return coping_skills.map(coping_skill => (
            <li key={coping_skill.id} className='coping-item'>
                {coping_skill.child}
            </li>
        ))
    }

    generateParentCopingSkillsList(coping_skills) {
        return coping_skills.map(coping_skill => (
            <li key={coping_skill.id} className='coping-item'>
                {coping_skill.parent}
            </li>
        ))
    }

    generateCopingPage = () => {
        if (this.props.location.pathname.includes('/child-coping')) {
            return (
                <div id="coping">
                    <section className="container">
                        <h2 className="headline">Coping Suggestions</h2>
                        <p className="support-copy">Use the questions and tips below to open the lines of communication with your child in effor tto allow them to cope with their emotion/feeling or guide them to allow you to understand what they need. If they are not speaking; look for none verbial indicators.</p>
                    </section>
                    <section className="container">
                        <ul className="coping-list">
                        {this.generateChildCopingSkillsList(this.context.coping_skills)}
                        </ul>
                    </section>
                    <StandardBtn link='/get-started' text='Start Over' />
                </div>
            )
        } else {
            return (
                <div id="coping">
                    <section className="container">
                        <h2 className="headline">Coping Suggestions</h2>
                        <p className="support-copy">Use the questions and tips below to open the lines of communication with your child in effor tto allow them to cope with their emotion/feeling or guide them to allow you to understand what they need. If they are not speaking; look for none verbial indicators.</p>
                    </section>
                    <section className="container">
                        <ul className="coping-list">
                            {this.generateParentCopingSkillsList(this.context.coping_skills)}
                        </ul>
                    </section>
                    <section className="container">
                        <h3 className="section-head">Little To No Progress?</h3>
                        <p className="support-copy">Sometimes an emotion/feeling is hightened so much it requires some techniques that may be necessary.</p>
                        <ul className="coping-list">
                            <li className="coping-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sapiente beatae incidunt tempora?</li>
                            <li className="coping-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sapiente beatae incidunt tempora?</li>
                            <li className="coping-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sapiente beatae incidunt tempora?</li>
                            <li className="coping-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sapiente beatae incidunt tempora?</li>
                            <li className="coping-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores sapiente beatae incidunt tempora?</li>
                        </ul>
                    </section>
                    <StandardBtn link='/get-started' text='Start Over' />
                </div>
            )
        }
            
    }

    componentDidMount() {
        this.context.getSeverity(parseInt(this.props.match.params.severityId));
        this.context.getCopingSkills(this.context.current_feeling.id)
    }

    render() {
        return (
            <>
                {this.generateCopingPage()}
            </>
        )
    }
}

export default Coping;
import React, { Component } from 'react';
import EmolingsContext from '../../context/EmolingContext';
import './CopingSkills.css';

class CopingSkills extends Component {
    static contextType = EmolingsContext;

    generateCopingMasterList(all_coping_skills) {
        return all_coping_skills.map(coping_skill => (
            <li key={coping_skill.id} className="main-copy">
                {coping_skill.parent}
            </li>
        ))
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="coping-skills">
                <section className="container">
                    <h2 className="headline">Coping Skills</h2>
                    <ol>
                        {this.generateCopingMasterList(this.context.all_coping_skills)}
                    </ol>
                </section>
            </div>
        )
    }li
}

export default CopingSkills;
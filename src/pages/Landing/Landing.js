import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import UserBtn from '../../components/Btns/UserBtn/UserBtn'
import './Landing.css';


class Landing extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className="landing">
                <Hero />
                <section className="container user-selection">
                    <h2 className="section-head">Who Are You?</h2>
                    <p className="support-copy">Select the option below that best describes the role you play in assisting a child or yourself cope with the current feeling(s).</p>
                    <UserBtn user='parent/caregiver' />
                    <UserBtn user='child' />
                </section>
                <section className="container value-prop">
                    <h2 className="section-head">Why Emolings?</h2>
                    <p className="support-copy">Feeling charts are a thing of the past; unfortuantely, they're limited as they're static and although their purpose and intent of feeling identification is decent it doesn't solve the root of the problem. <span className='emphasized'>CONVERSATION & COPING SKILLS!</span></p>
                    <p className="standout-copy">Emolings is a modern age version of a feelings chart!!</p>
                    <h3 className="support-copy">Not only does Emolings provide emotion and feeling identification, both from the Parent/Caregiver and Child perspective; but Emolings also provides the next steps which are the most essential.</h3>
                    <ul className="value-items">
                        <li className="value-item">Create open communication between Parent/Guardian and Child</li>
                        <li className="value-item">Provide suggestions to help Parent/Guardian guide their Child to identify and express their emotions and feelings</li>
                        <li className="value-item">Present proven coping mechanisms to acknowledge and move through their emotions and feelings in a possitive manner</li>
                    </ul>
                </section>
                <section className="container letter">
                    <h2 className="section-head">A Letter To Parents and Caregivers</h2>
                    <p className="main-copy">Being a Parent/Guardian in today's age is a lot different than the approach your parents or maybe even yourself took many years ago.</p>
                    <p className="main-copy">Today's child requires communication, open communication to be exact. Not because the child has changed or the process of parenting as changed; but mainly due to the change within the environment your child is growing up in. Children today are enindated with information, knowledge, struggle and significantly fast paced environments.</p>
                    <p className="main-copy">It's your job as the Parent/Guardian to help guide them through those experiences and arm them with the proper foundations to properly communicate, express and handle different emotions and feelings in all situation; and at any point within their life. This process starts the moment they're brought into this world, not when they start speaking. You have to plant the seed early and often; it will stick with them for the rest of their lives.</p>
                    <p className="main-copy ephasized">You're not alone in this "required" approach and Emolings is hear to help you plant that seed!</p>
                </section>
            </div>
        )
    }
}

export default Landing;
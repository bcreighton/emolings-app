import React, { Component } from 'react';
import UserBtn from '../../components/Btns/UserBtn/UserBtn';
import './GetStarted.css';

class GetStarted extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div id="get-started">
                <section className="container user-selection">
                    <h2 className="headline">Who Are You?</h2>
                    <p className="support-copy">Your experience will be tailore to your seclection to help guid you down a path that is most effective.</p>
                    <UserBtn user='parent/caregiver' />
                    <UserBtn user='child' />
                </section>
            </div>
        )
    }
}

export default GetStarted;
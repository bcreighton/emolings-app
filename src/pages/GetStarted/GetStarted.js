import React, { Component } from 'react';
import UserBtn from '../../components/Btns/UserBtn/UserBtn';

class GetStarted extends Component {
    render() {
        return (
            <div id="get-started">
                <section className="container">
                    <h2 className="headline">Who Are You?</h2>
                    <UserBtn user='parent/caregiver' />
                    <UserBtn user='child' />
                    <p className="support-copy">You experience will be tailore to your seclection to help guid you down a path that is most effective.</p>
                </section>
            </div>
        )
    }
}

export default GetStarted;
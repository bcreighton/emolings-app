import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SelectBtn from '../../../components/Btns/SelectBtn/SelectBtn';
import StandardBtn from '../../../components/Btns/StandardBtn/StandardBtn';

class FeelingSelection extends Component {

    renderFeelingsPage = () => {
        if(this.props.location.pathname === '/child-feeling-selection') {
            return (
                <div id="feeling-selection">
                    <section className="container">
                        <h2 className="headline">Feeling Selection</h2>
                    </section>
                    <section className="container options">
                        <SelectBtn feeling='mad' />
                        <SelectBtn feeling='sad' />
                        <SelectBtn feeling='happy' />
                        <SelectBtn feeling='scared' />
                        <SelectBtn feeling='hungry' />
                    </section>
                </div>
            )
        }
        else {
            return (
                <div id="feeling-selection">
                    <section className="container">
                        <h2 className="headline">Feeling Selection</h2>
                        <p className="support-copy">Using the options below; identify the feeling your child is expressing.</p>
                    </section>
                    <section className="container options">
                        <SelectBtn feeling='mad' />
                        <SelectBtn feeling='sad' />
                        <SelectBtn feeling='happy' />
                        <SelectBtn feeling='scared' />
                        <SelectBtn feeling='hungry' />
                    </section>
                    <section className="container help">
                        <h3 className="section-head">Need Help?</h3>
                        <p className="support-copy">It can sometimes be difficult to identify the emotion/feeling your child is expressing. Click below for identificaiton suggestions.</p>
                        <StandardBtn link='/feeling-identification' text='Feeling Identification Suggestions' />
                    </section>
                </div>
            )
        }
    }
    render() {
        return (
            <>
                {this.renderFeelingsPage()}
            </>
        )
    }
}

export default withRouter(FeelingSelection);
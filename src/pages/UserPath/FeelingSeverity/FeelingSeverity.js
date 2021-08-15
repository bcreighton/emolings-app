import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SelectBtn from '../../../components/Btns/SelectBtn/SelectBtn';
import StandardBtn from '../../../components/Btns/StandardBtn/StandardBtn';
import EmolingsContext from '../../../context/EmolingContext';

class FeelingSeverity extends Component {
    static contextType = EmolingsContext;

    generateSeverityList(severity_levels) {
        return severity_levels.map(severity => (
            <SelectBtn
                key={severity.id}
                id={severity.id}
                severity={severity.level}
                color={severity.color}
            />
        ))
    }

    generateSeverityPage = () => {
        if(this.props.location.pathname.includes('/child-feeling-severity')) {
            return (
                <div id="feeling-severity">
                    <section className="container">
                        <h2 className="headline">How Strong Is This Emotion/Feeling?</h2>
                    </section>
                    <section className="container options">
                        {this.generateSeverityList(this.context.severity_levels)}
                    </section>
                </div>
            )
        }
        else {
            return (
                <div id="feeling-severity">
                    <section className="container">
                        <h2 className="headline">How Strong Is This Emotion/Feeling?</h2>
                        <p className="support-copy">Using the options below; identify The severity of the emotion or feeling your child is expressing.</p>
                    </section>
                    <section className="container options">
                        {this.generateSeverityList(this.context.severity_levels)}
                    </section>
                    <section className="container">
                        <h3 className="section-head">Need Help?</h3>
                        <p className="support-copy">It can sometimes be difficult to identify the severity of an emotion/feeling your child is expressing. Click below for identificaiton suggestions.</p>
                        <StandardBtn link='/severity-identification' text='Feeling Severity Identification Suggestions' />
                    </section>
                </div>
            )
        }
    }

    componentDidMount() {
        this.context.setTrackLocation(this.props.location.pathname);
        (!this.props.location.pathname.includes('/child-feeling-severity'))
            && this.context.getAdvFeeling(parseInt(this.props.match.params.advFeelingId))
    }

    render() {
        return (
            <>
                {this.generateSeverityPage()}
            </>
        )
    }
}

export default withRouter(FeelingSeverity);
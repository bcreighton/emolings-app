import React, { Component } from 'react';
import SelectBtn from '../../../components/Btns/SelectBtn/SelectBtn';
import EmolingsContext from '../../../context/EmolingsContext';

class AdvFeelingSelection extends Component {
    static contextType = EmolingsContext;
    static defaultProps = { match: {params:{ feelingId: '1'}}}

    generateAdvFeelingList(adv_feelings) {
        return adv_feelings.map(adv_feeling => (
            <SelectBtn
                key={adv_feeling.id}
                id={adv_feeling.id}
                advFeeling={adv_feeling.name}
                color={adv_feeling.color}
            />
        ))
    }

    componentDidMount() {
        
        this.context.getFeeling(parseInt(this.props.match.params.feelingId))
        this.context.getAdvFeelings(parseInt(this.props.match.params.feelingId))
    }
    render() {
        return (
            <div id="adv-feeling-selection">
                <section className="container">
                    <h2 className="headline">Advanced Feeling Selection</h2>
                    <p className="support-copy">Using the options below; identify the deeper more advanced emotion/feeling your child is expressing.</p>
                </section>
                <section className="container options">
                    {this.generateAdvFeelingList(this.context.adv_feelings)}
                </section>
            </div>
        )
    }
}

export default AdvFeelingSelection;
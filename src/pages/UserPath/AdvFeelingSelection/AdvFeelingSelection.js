import React, { Component } from 'react';
import SelectBtn from '../../../components/Btns/SelectBtn/SelectBtn';
import EmolingsContext from '../../../context/EmolingContext';

class AdvFeelingSelection extends Component {
    static contextType = EmolingsContext;

    componentDidMount() {
        debugger;
        window.scrollTo(0, 0);
        this.context.getFeeling(parseInt(this.props.match.params.feelingId))
    }
    render() {
        return (
            <div id="adv-feeling-selection">
                <section className="container">
                    <h2 className="headline">Advanced Feeling Selection</h2>
                    <p className="support-copy">Using the options below; identify the deeper more advanced emotion/feeling your child is expressing.</p>
                </section>
                <section className="container options">
                    <SelectBtn advFeeling='lonley' color='blue' />
                    <SelectBtn advFeeling='loved' color='green' />
                    <SelectBtn advFeeling='nervous' color='blue' />
                    <SelectBtn advFeeling='hurt' color='red' />
                    <SelectBtn advFeeling='annoyed' color='purple' />
                    <SelectBtn advFeeling='skip' color='none' />
                </section>
            </div>
        )
    }
}

export default AdvFeelingSelection;
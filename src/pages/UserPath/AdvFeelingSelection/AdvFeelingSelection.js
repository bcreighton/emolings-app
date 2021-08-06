import React, { Component } from 'react';
import SelectBtn from '../../../components/Btns/SelectBtn/SelectBtn';

class AdvFeelingSelection extends Component {
    render() {
        return (
            <div id="adv-feeling-selection">
                <section className="container">
                    <h2 className="headline">Advanced Feeling Selection</h2>
                    <p className="support-copy">Using the options below; identify the deeper more advanced emotion/feeling your child is expressing.</p>
                </section>
                <section className="container">
                    <SelectBtn advFeeling='lonley' />
                    <SelectBtn advFeeling='loved' />
                    <SelectBtn advFeeling='nervous' />
                    <SelectBtn advFeeling='hurt' />
                    <SelectBtn advFeeling='annoyed' />
                    <SelectBtn advFeeling='skip' />
                </section>
            </div>
        )
    }
}

export default AdvFeelingSelection;
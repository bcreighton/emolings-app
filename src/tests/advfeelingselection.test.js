import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import AdvFeelingSelection from '../pages/UserPath/AdvFeelingSelection/AdvFeelingSelection';
import EmolingsContext from '../context/EmolingsContext';

describe(`Advanced Feeling Selection Component`, () => {

    const context = {
        getFeeling: jest.fn(),
        getAdvFeelings: jest.fn(),
        adv_feelings: [],
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        

        render(
            <EmolingsContext.Provider value={context}>
                <BrowserRouter>
                    <AdvFeelingSelection />
                </BrowserRouter>
            </EmolingsContext.Provider>, div)
            
        ReactDOM.unmountComponentAtNode(div)
    })   
})
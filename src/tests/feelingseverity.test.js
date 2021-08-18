import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import FeelingSeverity from '../pages/UserPath/FeelingSeverity/FeelingSeverity'
import EmolingsContext from '../context/EmolingsContext';

describe(`Feeling Severity Component`, () => {

    const context = {
        severity_levels: [],
        getAdvFeeling: jest.fn(),
        resetCopingSkills: jest.fn(),
        setTrackLocation: jest.fn(),
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        

        render(
            <EmolingsContext.Provider value={context}>
                <BrowserRouter>
                    <FeelingSeverity
                        location= {{pathname:''}}
                        match= {{params: { advFeelingId: 1 }}}
                    />
                </BrowserRouter>
            </EmolingsContext.Provider>, div)
            
        ReactDOM.unmountComponentAtNode(div)
    })   
})
import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import FeelingSelection from '../pages/UserPath/FeelingSelection/FeelingSelection'
import EmolingsContext from '../context/EmolingsContext';

describe(`Feeling Selection Component`, () => {

    const context = {
        feelings: [],
        setUserType: jest.fn(),
        resetAdvFeelings: jest.fn(),
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        

        render(
            <EmolingsContext.Provider value={context}>
                <BrowserRouter>
                    <FeelingSelection />
                </BrowserRouter>
            </EmolingsContext.Provider>, div)
            
        ReactDOM.unmountComponentAtNode(div)
    })   
})
import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import FeelingIdentification from '../pages/UserPath/FeelingIdentification/FeelingIdentification'
import EmolingsContext from '../context/EmolingsContext';

describe(`Feeling Identification Component`, () => {

    const context = {
        feeling_identifiers: [],
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        

        render(
            <EmolingsContext.Provider value={context}>
                <BrowserRouter>
                    <FeelingIdentification />
                </BrowserRouter>
            </EmolingsContext.Provider>, div)
            
        ReactDOM.unmountComponentAtNode(div)
    })   
})
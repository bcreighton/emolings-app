import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import SeverityIdentification from '../pages/UserPath/SeverityIdentification/SeverityIdentification'
import EmolingsContext from '../context/EmolingsContext';

describe(`Severity Identification Component`, () => {

    const context = {
        severity_identifiers: [],
        track_location:'',
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        

        render(
            <EmolingsContext.Provider value={context}>
                <BrowserRouter>
                    <SeverityIdentification link={''}/>
                </BrowserRouter>
            </EmolingsContext.Provider>, div)
            
        ReactDOM.unmountComponentAtNode(div)
    })   
})
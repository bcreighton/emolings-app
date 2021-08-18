import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import Faq from '../pages/Faq/Faq';
import EmolingsContext from '../context/EmolingsContext';

describe(`Faq Component`, () => {

    const context = {
        faqs: [],
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        

        render(
            <EmolingsContext.Provider value={context}>
                <BrowserRouter>
                    <Faq />
                </BrowserRouter>
            </EmolingsContext.Provider>, div)
            
        ReactDOM.unmountComponentAtNode(div)
    })   
})
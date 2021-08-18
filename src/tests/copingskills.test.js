import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import CopingSkills from '../pages/CopingSkills/CopingSkills';
import EmolingsContext from '../context/EmolingsContext';

describe(`Coping Skills Component`, () => {

    const context = {
        all_coping_skills: [],
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        

        render(
            <EmolingsContext.Provider value={context}>
                <BrowserRouter>
                    <CopingSkills />
                </BrowserRouter>
            </EmolingsContext.Provider>, div)
            
        ReactDOM.unmountComponentAtNode(div)
    })   
})
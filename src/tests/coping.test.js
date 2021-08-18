import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import Coping from '../pages/UserPath/Coping/Coping'
import EmolingsContext from '../context/EmolingsContext'

// Run tests
describe('coping component', () => {

    it('renders without crashing', () => {
    const div = document.createElement('div')

    render(
        <BrowserRouter>
            <EmolingsContext.Provider 
            value={
                {
                    getSeverity: jest.fn(),
                    getCopingSkills: jest.fn(),
                    coping_skills: [],
                    reminders: [],
                    current_feeling: {id:1}
                }
            }>
                <Coping 
                    location={ {pathname: ''} }
                    match={ {params: {severityId:''}}}
                />
            </EmolingsContext.Provider>
        </BrowserRouter>, 
        div)
    ReactDOM.unmountComponentAtNode(div)
    })
})
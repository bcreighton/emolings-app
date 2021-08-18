import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import SelectBtn from '../components/Btns/SelectBtn/SelectBtn';
import StandardBtn from '../components/Btns/StandardBtn/StandardBtn';
import UserBtn from '../components/Btns/UserBtn/UserBtn'
import EmolingsContext from '../context/EmolingsContext';

describe(`BTN Components`, () => {
    const context = {
        all_coping_skills: [],
        track_location: ''
    }

    describe('SelectBtn Component', () => {
        
    
        it('renders without crashing', () => {
            const div = document.createElement('div');
            
    
            render(
                <EmolingsContext.Provider value={context}>
                    <BrowserRouter>
                        <SelectBtn />
                    </BrowserRouter>
                </EmolingsContext.Provider>, div)
                
            ReactDOM.unmountComponentAtNode(div)
        })   
    })

    describe('StandardBtn Component', () => {
    
        it('renders without crashing', () => {
            const div = document.createElement('div');
            
    
            render(
                <EmolingsContext.Provider value={context}>
                    <BrowserRouter>
                        <StandardBtn link={''}/>
                    </BrowserRouter>
                </EmolingsContext.Provider>, div)
                
            ReactDOM.unmountComponentAtNode(div)
        })   
    })

    describe('UserBtn Component', () => {
    
        it('renders without crashing', () => {
            const div = document.createElement('div');
            
    
            render(
                <EmolingsContext.Provider value={context}>
                    <BrowserRouter>
                        <UserBtn />
                    </BrowserRouter>
                </EmolingsContext.Provider>, div)
                
            ReactDOM.unmountComponentAtNode(div)
        })   
    })
})
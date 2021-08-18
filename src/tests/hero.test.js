import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Hero from '../components/Hero/Hero'

// Run tests

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})
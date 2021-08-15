// Essentials
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";
import EmolingsApiService from './services/emolings-api-service';

// Context and Components
import EmolingsContext from './context/EmolingContext';
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing';
import GetStarted from './pages/GetStarted/GetStarted';
import Faq from './pages/Faq/Faq';
import CopingSkills from './pages/CopingSkills/CopingSkills';
import FeelingSelection from './pages/UserPath/FeelingSelection/FeelingSelection';
import FeelingIdentification from './pages/UserPath/FeelingIdentification/FeelingIdentification';
import AdvFeelingSelection from './pages/UserPath/AdvFeelingSelection/AdvFeelingSelection';
import FeelingSeverity from './pages/UserPath/FeelingSeverity/FeelingSeverity';
import SeverityIdentification from './pages/UserPath/SeverityIdentification/SeverityIdentification';
import Coping from './pages/UserPath/Coping/Coping';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

// Stylesheets
import './App.css';
import './reset.css';

class App extends Component {
  state = {
    user_type: {},
    feelings: [],
    adv_feelings: [],
    severity_levels: [],
    feeling_identifiers: [],
    severity_identifiers: [],
    reminders: [],
    current_feeling: {},
    current_adv_feeling: {},
    current_severity: {},
    error: null,
  }

  // User Type Methods
  resetUserType = () => {
    return this.setState({
      user_type: {},
    })
  }

  setUserType = user_type => {
    this.resetUserType()
    return this.setState({
      user_type,
      error: null,
    })
  }

  getUserType = id => {
    EmolingsApiService.getUserType(id)
      .then(this.setUserType)
      .catch(error => this.setState({
        user_type: [],
        error
      }))
  }

  // Feeling Methods
  resetFeelings = () => {
    return this.setState({
      feelings: [],
      error: null,
    })
  }

  resetCurrentFeeling = () => {
    return this.setState({
      current_feeling: {},
      error: null,
    })
  }

  setFeelings = feelings => {
    this.resetFeelings()
    return this.setState({
      feelings,
      error: null,
    })
  }

  setCurrentFeeling = current_feeling => {
    debugger;
    this.resetCurrentFeeling()
    return this.setState({
      current_feeling,
      error: null,
    })
  }

  getFeelings = () => {
    EmolingsApiService.getFeelings()
      .then(this.setFeelings)
      .catch(error => this.setState({
        feelings: {},
        error,
      }))
  }

  getFeeling = id => {
    debugger;
    EmolingsApiService.getFeeling(id)
      .then(this.setCurrentFeeling)
      .catch(error => this.setState({
        current_feeling: {},
        error
      }))
  }

  componentDidMount() {
    this.getFeelings()
  }

  render() {

    const contextValue = {
      user_type: this.state.user_type,
      feelings: this.state.feelings,
      getFeeling: this.getFeeling,
      setUserType: this.setUserType,
    }
    return (
      <div className='App'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Emolings</title>
            <meta name='description' content='Modern day child feelings chart with a unique spin on parent/caregiver coping skills.'/>
        </Helmet>
        <EmolingsContext.Provider value={ contextValue }>
          <Nav />
          <main>
            <Switch>
              <Route path='/get-started' component={GetStarted} />
              <Route path='/faq' component={Faq} />
              <Route path='/coping-skills' component={CopingSkills} />
              <Route path='/feeling-selection' component={FeelingSelection} />
              <Route path='/feeling-selection/:feelingId' component={FeelingSelection} />
              <Route path='/child-feeling-selection' component={FeelingSelection} />
              <Route path='/feeling-identification' component={FeelingIdentification} />
              <Route path='/adv-feeling-selection' component={AdvFeelingSelection} />
              <Route path='/child-feeling-severity' component={FeelingSeverity} />
              <Route path='/feeling-severity' component={FeelingSeverity} />
              <Route path='/severity-identification' component={SeverityIdentification} />
              <Route path='/child-coping' component={Coping} />
              <Route path='/coping' component={Coping} />
              <Route path='/' exact component={Landing} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
          <Footer />
        </EmolingsContext.Provider>
      </div>
    );
  }
}

export default App;
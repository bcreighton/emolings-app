// Essentials
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";
import EmolingsApiService from './services/emolings-api-service';

// Context and Components
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

// Utilities
import EmolingsContext from './context/EmolingsContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

class App extends Component {
  state = {
    user_type: {},
    feelings: [],
    adv_feelings: [],
    severity_levels: [],
    feeling_identifiers: [],
    severity_identifiers: [],
    reminders: [],
    faqs: [],
    all_coping_skills: [],
    coping_skills: [],
    current_feeling: {},
    current_adv_feeling: {},
    current_severity: {},
    track_location: '',
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
        feelings: [],
        error,
      }))
  }

  getFeeling = id => {
    EmolingsApiService.getFeeling(id)
      .then(this.setCurrentFeeling)
      .catch(error => this.setState({
        current_feeling: {},
        error
      }))
  }

  // Advance Feeling Methods

  resetAdvFeelings = () => {
    return this.setState({
      adv_feelings: [],
      error: null,
    })
  }

  resetCurrentAdvFeeling = () => {
    return this.setState({
      current_adv_feeling: {},
      error: null,
    })
  }

  setAdvFeelings = adv_feelings => {
    return this.setState({
      adv_feelings,
      error: null,
    })
  }

  setCurrentAdvFeeling = current_adv_feeling => {
    this.resetCurrentAdvFeeling()
    return this.setState({
      current_adv_feeling,
      error: null,
    })
  }

  getAdvFeelings = main_feeling_id => {
    EmolingsApiService.getAdvFeelings(main_feeling_id)
      .then(this.setAdvFeelings)
      .catch(error => this.setState({
        adv_feelings: {},
        error,
      }))
  }

  getAdvFeeling = id => {
    EmolingsApiService.getAdvFeeling(id)
      .then(this.setCurrentAdvFeeling)
      .catch(error => this.setState({
        current_adv_feeling: {},
        error
      }))
  }

  // Severity Methods
  resetSeverityLevels = () => {
    return this.setState({
      severity_levels: [],
      error: null,
    })
  }

  resetCurrentSeverity = () => {
    return this.setState({
      current_severity: {},
      error: null,
    })
  }

  setSeverityLevels = severity_levels => {
    this.resetSeverityLevels()
    return this.setState({
      severity_levels,
      error: null,
    })
  }

  setCurrentSeverity = current_severity => {
    this.resetCurrentSeverity()
    return this.setState({
      current_severity,
      error: null,
    })
  }

  getSeverityLevels = () => {
    EmolingsApiService.getSeverityLevels()
      .then(this.setSeverityLevels)
      .catch(error => this.setState({
        severity_levels: [],
        error,
      }))
  }

  getSeverity = id => {
    EmolingsApiService.getSeverity(id)
      .then(this.setCurrentSeverity)
      .catch(error => this.setState({
        current_severity: {},
        error
      }))
  }

  // Coping Skill Methods
  resetCopingSkills = () => {
    return this.setState({
      coping_skills: [],
      error: null,
    })
  }

  resetAllCopingSkills = () => {
    return this.setState({
      all_coping_skills: [],
      error: null,
    })
  }

  setCopingSkills = coping_skills => {
    return this.setState({
      coping_skills,
      error: null,
    })
  }

  setAllCopingSkills = all_coping_skills => {
    this.resetAllCopingSkills()
    return this.setState({
      all_coping_skills,
      error: null,
    })
  }

  getAllCopingSkills = () => {
    EmolingsApiService.getAllCopingSkills()
      .then(this.setAllCopingSkills)
      .catch(error => this.setState({
        all_coping_skills: [],
        error,
      }))
  }

  getCopingSkills = main_feeling_id => {
    EmolingsApiService.getCopingSkills(main_feeling_id)
      .then(this.setCopingSkills)
      .catch(error => this.setState({
        coping_skills: [],
        error,
      }))
  }

  // Identifier Methods
  resetFeelingIdentifiers = () => {
    return this.setState({
      feeling_identifiers: [],
      error: null,
    })
  }

  resetSeverityIdentifiers = () => {
    return this.setState({
      severity_identifiers: [],
      error: null,
    })
  }

  setFeelingIdentifiers = feeling_identifiers => {
    this.resetFeelingIdentifiers()
    return this.setState({
      feeling_identifiers,
      error: null,
    })
  }

  setSeverityIdentifiers = severity_identifiers => {
    this.resetSeverityIdentifiers()
    return this.setState({
      severity_identifiers,
      error: null,
    })
  }

  getFeelingIdentifiers = () => {
    EmolingsApiService.getIdentifiers('Feeling')
      .then(this.setFeelingIdentifiers)
      .catch(error => this.setState({
        feeling_identifiers: [],
        error,
      }))
  }

  getSeverityIdentifiers = () => {
    EmolingsApiService.getIdentifiers('Severity')
      .then(this.setSeverityIdentifiers)
      .catch(error => this.setState({
        severity_identifiers: [],
        error,
      }))
  }

  // Reminder Methods
  resetReminders = () => {
    return this.setState({
      reminders: [],
      error: null,
    })
  }

  setReminders = reminders => {
    this.resetReminders()
    return this.setState({
      reminders,
      error: null,
    })
  }

  getReminders = () => {
    EmolingsApiService.getReminders()
      .then(this.setReminders)
      .catch(error => this.setState({
        reminders: [],
        error,
      }))
  }

  // FAQ Methods
  resetFaqs = () => {
    return this.setState({
      faqs: [],
      error: null,
    })
  }

  setFaqs = faqs => {
    
    this.resetFaqs()
    return this.setState({
      faqs,
      error: null,
    })
  }

  getFaqs = () => {
    
    EmolingsApiService.getFaqs()
      .then(this.setFaqs)
      .catch(error => this.setState({
        faqs: [],
        error,
      }))
  }

  // Set Track Location Methods
  
  resetTrackLocation = () => {
    return this.setState({
      track_location: '',
      error: null,
    })
  }

  setTrackLocation = track_location => {
    this.resetTrackLocation()
    return this.setState({
      track_location,
      error: null,
    })
  }


  componentDidMount() {
    this.getFeelings();
    this.getSeverityLevels();
    this.getFeelingIdentifiers();
    this.getSeverityIdentifiers();
    this.getAllCopingSkills();
    this.getReminders();
    this.getFaqs();
  }

  render() {

    const contextValue = {
      user_type: this.state.user_type,
      feelings: this.state.feelings,
      adv_feelings: this.state.adv_feelings,
      severity_levels: this.state.severity_levels,
      coping_skills: this.state.coping_skills,
      feeling_identifiers: this.state.feeling_identifiers,
      severity_identifiers: this.state.severity_identifiers,
      reminders: this.state.reminders,
      faqs: this.state.faqs,
      all_coping_skills: this.state.all_coping_skills,
      current_feeling: this.state.current_feeling,
      current_adv_feeling: this.state.current_adv_feeling,
      current_severity: this.state.current_severity,
      track_location: this.state.track_location,
      getFeeling: this.getFeeling,
      getAdvFeeling: this.getAdvFeeling,
      getAdvFeelings: this.getAdvFeelings,
      resetAdvFeelings: this.resetAdvFeelings,
      getSeverity: this.getSeverity,
      getCopingSkills: this.getCopingSkills,
      resetCopingSkills: this.resetCopingSkills,
      setUserType: this.setUserType,
      setTrackLocation: this.setTrackLocation,
    }

    return (
      <ScrollToTop>
        <div className='App'>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Emolings</title>
              <meta name='description' content='Modern day child feelings chart with a unique spin on parent/caregiver coping skills.'/>
              <meta name="viewport" content= "width=device-width, user-scalable=no"></meta>
          </Helmet>
          <EmolingsContext.Provider value={ contextValue }>
            <Nav />
            <main>
              <Switch>
                <Route path='/get-started' component={GetStarted} />
                <Route path='/faq' component={Faq} />
                <Route path='/coping-skills' component={CopingSkills} />
                <Route path='/feeling-selection' component={FeelingSelection} />
                <Route path='/child-feeling-selection' component={FeelingSelection} />
                <Route path='/feeling-identification' component={FeelingIdentification} />
                <Route path='/adv-feeling-selection/:feelingId' component={AdvFeelingSelection} />
                <Route path='/child-feeling-severity/:feelingId' component={FeelingSeverity} />
                <Route path='/feeling-severity/:advFeelingId' component={FeelingSeverity} />
                <Route path='/severity-identification' component={SeverityIdentification} />
                <Route path='/child-coping/:severityId' component={Coping} />
                <Route path='/coping/:severityId' component={Coping} />
                <Route path='/' exact component={Landing} />
                <Route component={PageNotFound} />
              </Switch>
            </main>
            <Footer />
          </EmolingsContext.Provider>
        </div>
      </ScrollToTop>
    );
  }
}

export default App;